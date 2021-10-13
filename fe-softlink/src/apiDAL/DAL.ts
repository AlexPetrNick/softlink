const baseUrl = 'http://127.0.0.1:8000/api/'
const authUrl = 'http://127.0.0.1:8000/auth/'
const tokenUrl = 'http://127.0.0.1:8000/token/'

let access = localStorage.getItem('access')
let requestHeader: HeadersInit = new Headers()
let jwtString: string

if (access) {
    jwtString = "JWT " + String(access)
    requestHeader.set("Content-type", "application/json")
    requestHeader.set("Authorization", jwtString)
} else {
    requestHeader.set("Content-type", "application/json")
}

export const apiComputer = {
    fetchComputer: () => {
        return (
            fetch(baseUrl + 'computer', {
                headers: requestHeader
            })
                .then(resp => resp.json())
        )
    }
}

export const apiNews = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + 'news?format=json')
                .then(resp => resp.json()
                )
        )
    },
    fetchOnClick: (page: number) => {
        return (
            fetch(baseUrl + 'news?page=' + String(page))
                .then(resp => resp.json())
        )
    }
}


export const apiHdd = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + "hdd/?format=json")
                .then(responce => responce.json())
        )
    },
    fetchOnClick: (page: number, params = '') => {
        return (
            fetch(baseUrl + "hdd/?format=json&page=" + String(page) + String(params))
                .then(responce => responce.json())
        )
    }

}

export const apiRam = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + "ram/?format=json")
                .then(responce => responce.json())
        )
    },
    fetchOnClick: (page: number, params = '') => {
        return (
            fetch(baseUrl + "ram/?format=json&page=" + String(page) + String(params))
                .then(responce => responce.json())
        )
    }

}

export const apiVideo = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + "videocard/?format=json")
                .then(responce => responce.json())
        )
    },
    fetchOnClick: (page: number, params = '') => {
        return (
            fetch(baseUrl + "videocard/?format=json&page=" + String(page) + String(params))
                .then(responce => responce.json())
        )
    }

}

export const apiPower = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + "power/?format=json")
                .then(responce => responce.json())
        )
    },
    fetchOnClick: (page: number, params = '') => {
        return (
            fetch(baseUrl + "power/?format=json&page=" + String(page) + String(params))
                .then(responce => responce.json())
        )
    }

}

export const apiSsd = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + "ssd?format=json")
                .then(responce => responce.json())
        )
    },
    fetchOnClick: (page: number, params = '') => {
        return (
            fetch(baseUrl + "ssd?format=json&page=" + String(page) + String(params))
                .then(responce => responce.json())
                .then(response => {
                    console.log(response)
                    return response
                })
        )
    }

}

export const apiMother = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + "mother/?format=json")
                .then(responce => responce.json())
        )
    },
    fetchOnClick: (page: number, params = '') => {
        return (
            fetch(baseUrl + "mother/?format=json&page=" + String(page) + String(params))
                .then(responce => responce.json())
        )
    }

}


export const apiCpu = {
    fetchOnMount: () => {
        return (
            fetch(baseUrl + "cpu/?format=json")
                .then(responce => responce.json())
        )
    },
    fetchOnClick: (page: number, params = '') => {
        return (
            fetch(baseUrl + "cpu/?format=json&page=" + String(page) + String(params))
                .then(responce => responce.json())
        )
    }

}

export const apiUser = {
    registration: (
        username: string,
        password: string,
        email: string,
        first_name: string,
        telephone: string,
        about: string
    ) => {
        return (
            fetch(baseUrl + "user_create/", {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "email": email,
                    "first_name": first_name,
                    "telephone": telephone,
                    "about": about
                })
            })
        )
            .then(resp => resp.json())
    },
    authorization: (username: string, password: string) => {
        return (
            fetch(authUrl + "jwt/create/", {
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
                    console.log(jsonfile)
                    localStorage.setItem('access', jsonfile.access)
                    localStorage.setItem('refresh', jsonfile.refresh)
                    return jsonfile
                })
        )
    },
    setCookie: (token: string) => {
        return (
            fetch(baseUrl + "setcook/", {
                method: "get",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                    "Set-Cookie": "Authorization=JWT " + String(token) + ";HttpOnly"
                },
            })
        )
    },
    refreshToken: (refToken: string) => {
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
                headers: requestHeader
            })
                .then(resp => resp.json())
        )
    },
    isValidToken: (token: string) => {
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
    getStateCabinet: () => {
        return (
            fetch(baseUrl + "cabinet/", {
                headers: requestHeader,
            })
                .then(response => response.json())
                .catch(err => console.log(err))
        )
    },
    addItemHdd: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/hdd/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    eraseItemHdd: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/erase_hdd/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    addItemMother: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/mother/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    eraseItemMother: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/erase_mother/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    addItemCpu: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/cpu/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    eraseItemCpu: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/erase_cpu/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    addItemSsd: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/ssd/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    eraseItemSsd: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/erase_ssd/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    addItemVideo: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/video/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    eraseItemVideo: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/erase_video/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    addItemRam: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/ram/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    eraseItemRam: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/erase_ram/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    addItemPower: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/power/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    },
    eraseItemPower: (id: number) => {
        return (
            fetch(baseUrl + 'cabinet/erase_power/' + String(id), {
                    method: "post",
                    headers: requestHeader
                }
            )
        )
    }
}

