
const baseUrl = 'http://127.0.0.1:8000/api/'
const authUrl = 'http://127.0.0.1:8000/auth/'
const tokenUrl = 'http://127.0.0.1:8000/token/'

let access = localStorage.getItem('access')

let header = {
    "Content-type": "application/json",
    "Authorization": "JWT " + String(access)
}


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
    authorization: (username, password) => {
        return(
        fetch(tokenUrl, {
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
        .then(resp => resp.json())
        .then(jsonfile => {
            localStorage.setItem('access', jsonfile.access)
            localStorage.setItem('refresh', jsonfile.refresh)
            return jsonfile
        })
    )    
    }, 
    setCookie: (token) => {
        return(
            fetch(baseUrl + "setcook/",{
              method: "get",
              credentials: "include",
              headers: {
              "Content-type": "application/json",
              "Set-Cookie": "Authorization=JWT "+String(token)+";HttpOnly"
            },
            })
        )
      },
    refreshToken: (refToken) => {
        fetch(authUrl + "jwt/refresh", {
            method: "post",
            body: JSON.stringify({
                "refresh": refToken
            })
        })
    },
    getDataUser: () => {
        return (
            fetch(authUrl + "users/me/", {
                headers: header
            })
                .then(resp => resp.json)
        )
    },
    isValidToken: (token) => {
        fetch(authUrl + "jwt/verify/", {
            method: "post",
            credentials: "include",
            body: JSON.stringify({
                "token": token
            })
        })    
    }
    
}

export const apiCabinet = {
    getStateCabinet: (id) => {
        return (
            fetch(baseUrl + "cabinet/" + id, {
                headers: header,
            })
            .catch(err => console.log(err))
        )
    },
    addItemHdd: (id) => {
        return (
            fetch(baseUrl + 'cabinet/hdd/' + String(id), {
                method: "post",
                headers: header
                }
            )
        )
    },
    eraseItemHdd: (id) => {
        return (
            fetch(baseUrl + 'cabinet/erase_hdd/' + String(id), {
                method: "post",
                headers: header
                }
            )
        )
    }
}
