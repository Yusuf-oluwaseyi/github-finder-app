import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
      users: [],
      loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // For search users
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
          q: text
        })

        const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });
    
        const { items } = await res.json();
    
        dispatch({
          type: "GET_USERS",
          payload: items,
        })
      };

      // set loding 
      const setLoading = () => dispatch({type: "SET_LOADING"})

      return <GithubContext.Provider
       value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
      }}>
        {children}
      </GithubContext.Provider>
}

export default GithubContext