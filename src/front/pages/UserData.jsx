
import useGlobalReducer from "../hooks/useGlobalReducer"


export const UserData = () => {

    const { store } = useGlobalReducer();

    console.log(store);

    if (!store.user) {
        return null
    }


    return (
        <section className="container">
            <h1>
                User Data
            </h1>
            <h2>
                {store.user.email}
            </h2>
        </section>
    )
}