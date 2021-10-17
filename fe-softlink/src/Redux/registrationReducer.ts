
export const SET_NULL_STATE_REGISTRATION = 'SET_NULL_STATE_REGISTRATION'
export const SET_STEP_ONE = 'SET_STEP_ONE'
export const SET_STEP_TWO = 'SET_STEP_TWO'


export type TsetNullStateRegistration = {
    type: typeof SET_NULL_STATE_REGISTRATION
}
export const setNullStateRegistration = (): TsetNullStateRegistration => ({type: SET_NULL_STATE_REGISTRATION})
export type TsetStepOne = {
    type: typeof SET_STEP_ONE,
    login: string
    firstName: string
    lastName: string
    password: string
    rePassword: string
}
export const setStepOne = (login: string, firstName: string, lastName: string, password: string, rePassword: string): TsetStepOne => ({
    type: SET_STEP_ONE,
    login,
    firstName,
    lastName,
    password,
    rePassword
})
export type TsetStepTwo = {
    type: typeof SET_STEP_TWO,
    phone: string
    email: string
    about: string
}
export const setStepTwo = (phone: string, email: string, about: string): TsetStepTwo => ({
    type: SET_STEP_TWO,
    phone,
    email,
    about
})

let initState = {
    login: "" as string,
    firstName: "" as string,
    lastName: "" as string,
    password: "" as string,
    rePassword: "" as string,
    phone: "" as string,
    email: "" as string,
    about: "" as string
}

export type TinitStateReg = typeof initState

type Taction = TsetNullStateRegistration | TsetStepOne | TsetStepTwo

const registraionReducer = (state:TinitStateReg = initState, action: Taction): TinitStateReg => {
    switch (action.type) {
        case SET_NULL_STATE_REGISTRATION:
            let states = initState
            return {
                ...states
            }
        case SET_STEP_ONE:
            return {
                ...state,
                login: action.login,
                firstName: action.firstName,
                lastName: action.lastName,
                password: action.password,
                rePassword: action.rePassword,
            }
        case SET_STEP_TWO:
            return {
                ...state,
                phone: action.phone,
                email: action.email,
                about: action.about
            }
        default:
            return {
                ...state
            }
    }
}

export default registraionReducer



