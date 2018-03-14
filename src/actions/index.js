import * as firebase from 'firebase';
export function sendForm(insurance) {
	return dispatch => {
		dispatch({type:"LOADING"});
		const ref = firebase.database().ref('insurance')
		const newCustRef = ref.push()
		newCustRef.set({...insurance}).then(a=>{
			dispatch({type:"SUCCESS"})
		}).catch(e=> {
			dispatch({type:"ERROR"})
		})
	}
}
