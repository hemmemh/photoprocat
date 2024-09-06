import './spinner.scss'
const Spinner = ({size=80}:{size:number}) => {
  return (
    <div  className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner