import {create} from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
    loggedIn: null,

    loginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        email: "",
        password: "",
    },
    
    updateLoginForm: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                }
            }
        })
    },

    updateSignupForm: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                }
            }
        })
    },

    login: async () => {
        
        const {loginForm} = authStore.getState();
        try{
            const res = await axios.post('/login', loginForm, {withCredentials: true});
            if(res.status === 200){
                set({loggedIn: true, loginForm: {email: '', password: ''}});
            }
        }
        catch(err){
            console.log(err);
        }
    },

    checkAuth: async () => {
        try{
            await axios.get('/check-auth');
            set({loggedIn: true});
        } catch (err){
            set ({loggedIn: false});
        }
    },

    signup: async() =>{
        const {signupForm} = authStore.getState();
        const res = await axios.post('/signup', signupForm, {withCredentials: true});

        set({
            signupForm: {
                email: '',
                password: '',
            }
        })
        console.log(res);
    },

    logout: async() =>{
        await axios.get('/logout', {withCredentials: true});
        set({loggedIn: false});
    }
}
));
export default authStore;
