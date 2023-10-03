const AutoLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <div className="flex items-center justify-center min-h-screen p-10">
          {children}
      </div>
    )
  }
  
  export default AutoLayout