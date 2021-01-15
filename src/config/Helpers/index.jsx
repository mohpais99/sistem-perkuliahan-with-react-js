import { Firebase } from "config";

export const fetchingData = (url) => {
    const response = []
    const fetch = Firebase.database().ref(url);
    fetch.on('value', (snapshot) => {
        const data = snapshot.val()
        if (data) {
            Object.keys(data).map(key => {
                return response.push({
                    id: key,
                    data: data[key]
                })
            })
        }
    });
    console.log('data =>', response);
    return response
}

export const loginAccess = async (props) => {
    return await Firebase.auth().signInWithEmailAndPassword(props.email, props.password)
}

export const logoutAccess = async () => {
    return await Firebase.auth().signOut()
}