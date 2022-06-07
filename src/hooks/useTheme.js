import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
	const context = useContext(ThemeContext);
	
	if (context === undefined) {
		throw new Error("useTheme is being used out of context scope")
	}
	
	return context;
}