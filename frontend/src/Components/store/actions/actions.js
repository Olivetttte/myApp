const getState = ({getStore, getActions, setStore}) => {
    
    return {
        
        store: {
            token: null,
            message: null,
            demo: [ 
                { 
                    title: "First Task", 
                    done: false 
                }, 
                { 
                    title: "Second Task", 
                    done: false 
                } 
            ],
         
        },
        
        actions: {
            // Use getActions to call a function within a function
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            syncTokenFromSessionStore: () => {
                const token = sessionStorage.getItem('token');
                console.log("application just loaded synching the local storage token with the session storage token")
                if (token && token != "" && token != "undefined") setStore({token: token});
            },

            //logout function and redirect to home page onclick

            logout: () => {
                sessionStorage.removeItem('token');
                setStore({token: null});
                console.log('loggging you out')
                window.location.href = "/";
            },

            login: async (email, password) => {
                // THIS WAS USED TO TEST FOR LOGIN TRY IT AND CHECK YOUR CONSOLE
                console.log("I want to login oooo")
                console.log(email)
                console.log(password)
                // THIS WAS USED TO TEST FOR LOGIN TRY IT AND CHECK YOUR CONSOLE
                const opts = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                };

                try {
                    const resp = await fetch('/token', opts)
                    if (resp.status !== 200) {
                        alert('Invalid credentials');
                        return false;
                    }

                    const data = await resp.json();
                    console.log('this came from backend',data );
                    sessionStorage.setItem('token', data.access_token);
                    setStore({token: data.access_token});
                    return true;
                }
                catch (error) {
                    console.error("there was an error login in!!!", error);
                }
               
            },

            loadSomeData: () => {
                const store = getStore();
                const opts = {
                    headers: {
                        'Authorization': 'Bearer ' + store.token,
                    },
                };
                // fetching data from the backend
                fetch("http://localhost:5000/", opts)
                    .then(resp => resp.json())
                    .then(data => setStore({message: data.message}))
                    .catch(error => console.log("Error loading data", error));
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                

                //reset the global store
                setStore({ demo: demo });
            },

           
            
        }
    };
};


export default getState;
