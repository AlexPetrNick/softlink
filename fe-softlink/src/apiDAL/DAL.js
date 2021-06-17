
const baseUrl = 'http://127.0.0.1:8000/api/'
const authUrl = 'http://127.0.0.1:8000/auth/'




export const apiNews = {
    fetchOnMount: () => {
        return (fetch(baseUrl + 'news?format=json')
            .then(resp => resp.json()
            )
        )
    },
    fetchOnClick: (page) => {
        return (
            fetch(baseUrl  + 'news?page=' +String(page))
                .then(resp => resp.json())
        )
    }
} 


export const apiHdd = {
    fetchOnMount: () => {
        return(
            fetch(baseUrl + "hdd/?format=json")
		    .then(responce => responce.json())
        )
    },
    fetchOnClick: (page) => {
        return(
            fetch(baseUrl + "hdd/?format=json&page=" + String(page))
		    .then(responce => responce.json())
        )
    }

}

export const apiMother = {
    fetchOnMount: () => {
        return(
            fetch(baseUrl + "mother/?format=json")
		    .then(responce => responce.json())
        )
    },
    fetchOnClick: (page) => {
        return(
            fetch(baseUrl + "mother/?format=json&page=" + String(page))
		    .then(responce => responce.json())
        )
    }

}


export const apiCpu = {
    fetchOnMount: () => {  
        return(
            fetch(baseUrl + "cpu/?format=json")
		    .then(responce => responce.json())
        )
    },
    fetchOnClick: (page) => {
        return(
            fetch(baseUrl + "cpu/?format=json&page=" + String(page))
		    .then(responce => responce.json())
        )
    }

}

export const apiUser = {
    getUser: (idUser) => {
        return(
            fetch(baseUrl+"users/"+idUser)
                .then(response => response.json())
        )
    },
    authorization: (username, password) => {
        return(
        fetch(authUrl + "jwt/create", {
            method: "post",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }
        )
    )    
    }, 
    setCookie: (token) => {
        fetch(baseUrl + "setcook/",{
          method: "get",
          credentials: "include",
          headers: {
          "Content-type": "application/json",
          "Set-Cookie": "Authorization=JWT "+String(token)+";HttpOnly"
        },
        })
      },
    refreshToken: (refToken) => {
        fetch(authUrl + "jwt/refresh", {
            method: "post",
            body: JSON.stringify({
                "refresh": refToken
            })
        })
    }
    
}

let getAccessToken = (username, password) => {

}
