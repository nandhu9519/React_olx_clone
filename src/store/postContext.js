import {createContext,useState} from 'react'
export const Postcontext = createContext(null)

function Post ({children}){
    const [postDetails, setPostDetails] = useState()
return (
    <Postcontext.Provider value={{postDetails,setPostDetails}}>
        {children}
    </Postcontext.Provider>
)
}

export default Post 
