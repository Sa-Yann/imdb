
import React, { useEffect, useState } from 'react';
import db from '../firebase';
import { useSelector } from 'react-redux';
import '../styles/plans_ProfileScreen.css'
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js'
import { useDispatch } from 'react-redux';
import { getProdInfo_Act } from '../features/productSlice'
// import { collection, onSnapshot} from 'firebase/firestore'

function Plans_ProfilScreen() {

    const user = useSelector(selectUser);

    const [products, setProducts] = useState([]);
    const [subscription, setSubscription] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {

        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach( async subscriptionInfo => {
                setSubscription({
                    role: subscriptionInfo.data().role,
                    current_period_end: subscriptionInfo.data().current_period_end.seconds,
                    current_period_start: subscriptionInfo.data().current_period_start.seconds
                })
                dispatch(getProdInfo_Act({
                    subscriptionPlan: subscriptionInfo.data().role
                }))
            })
        })

    },[user.uid, dispatch])


    useEffect( () => {

        //  // Firebase 9 try out
        // // Ça marche
        // getDocsFromServer(collection(db,'products'), (snapshot) => {
        // // console.log("file: Plans_ProfilScreen.js ~ line 13 ~ onSnapshot ~ snapshot", snapshot)
        //    console.log(snapshot.docs) 
        //    console.log(snapshot.docs.map(doc => doc.data()))
        // })

        

        db.collection('products') //fetching all te products inside the product collection
        .where('active', '==', true)
        .get() //instead of onsnashot 
        .then(function (querySnapshot) {
            const products = {}
            
            querySnapshot.forEach(async  productDoc => {
                // each product inside of products collectio n has its own id
                // each productid contains data()
                products[productDoc.id] = productDoc.data()
                // getting the plan price wich inside a collection inside the productDoc.ref 
                const priceSnap = await productDoc.ref.collection('prices').get()
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        // setting the prices that is linked to our choosen product
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
          });
          setProducts(products);
        });

    },[])

    // console.log(products);
    // console.log(subscription)

    const loadCheckout =  async (priceId) => {
        const docRef = await db
            .collection('customers')
            .doc(user.uid)
            .collection('checkout_sessions')
            .add({
                price: priceId, //every plan has is own price and its own id
                // establishing in the doc prices which as the corresponding user Id
                // the url where the subscription was made or cancel using window.location.origin
                success_url: window.location.origin,
                cancel_url: window.location.origin
            })
        // console.log("file: Plans_ProfilScreen.js ~ line 95 ~ loadCheckout ~ docRef", docRef)

        // using onSnapshot for the app to act as sson as there is a change in the subscription
        docRef.onSnapshot(async(snap) => {
            const  { error, sessionId } = snap.data();

            if (error) {
                // Show an error to your customer and
                // inspect your cloud function logs in the Firebase console
                alert(`An error occured: ${error.message}`)
            }

            if (sessionId) {
                //  We have a session , we want to redirect to Checkout
                // init Stripe using the secret API Key
                 const stripe = await loadStripe('pk_test_51KLqpdIQcCE81H4EnKrblW9NUz0zNfFXhWdYJgM8fWzVFJgCYoZls2Fskve2JhByCpStMEMUhl7cnlv37dj0GClR00S4ZE7XdO');
                 stripe.redirectToCheckout({ sessionId });
            }
        });
    };

    return (
        <div>
            <br/>
            {subscription && (
                <p>Renewal Date:{" "}
                    {new Date(
                        subscription?.current_period_end * 1000).toLocaleDateString()}
                </p>
                )}
            {/* <h1>I am the Plans_ProfilScreen</h1> */}
            {/* we need to map within products which s in an object and not an Array */}
            {/* Object.entries(products) transform products object into an array with keys and corresponding values */}
            {Object.entries(products).map(([productId, productData]) => {

                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role.toLowerCase())

                // console.log("file: Plans_ProfilScreen.js ~ line 117 ~ {Object.entries ~ isCurrentPackage", isCurrentPackage)

                // add some logic to check if the user subsciption is active
                return (
                    // returning the 3 different plans Info
                    <div
                        key = {productId} 
                        className= {`${isCurrentPackage && 'planScreen__Plan__Disabled'} planScreen__Plan`}
                    >
                        <div className="planScreen__Info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button 
                            className="planScreen_Btn"
                            onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}
                        >
                            {isCurrentPackage ? 'Current Package' : 'Subscribe'}
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default Plans_ProfilScreen;
