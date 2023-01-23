import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
	name: 'auth',
	initialState: {
		user: null
	},
	reducers: {
		login: (state, action) => {
			// localStorage.setItem('auth', action.payload)
			state.user = action.payload
		},
		logout: state => {
			state.user = null
			// localStorage.removeItem('auth')
		}
	}
})

export const { login, logout } = auth.actions

export const selectUser = state => state.auth.user

export default auth.reducer