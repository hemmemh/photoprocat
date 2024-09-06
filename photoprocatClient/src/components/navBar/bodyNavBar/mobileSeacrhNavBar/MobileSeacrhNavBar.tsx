import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks"
import useSearch from "../../../../hooks/useSearch"
import { navbarSlice } from "../../../../store2/reducers/NavBarSlice"


export  const MobileSeacrhNavBar = () => {
  const {search,filter} = useAppSelector((state)=>state.reducer.navbar)
  const dispatch = useAppDispatch()
  const {setSearch} = navbarSlice.actions
  const {setfilterTimeOn} = useSearch()
  return (
    <div className={search ?"Navba__searchBlockMobile searchBlockMobile active" : "Navbar__searchBlockMobile searchBlockMobile"}>
<div className="searchBlockMobile__container">
    <div className="searchBlockMobile__body">   
    <div className="searchBlockMobile__search">
        <input type="text" value={filter} onChange={(e:any)=>setfilterTimeOn(e.target.value)} className="searchBlockMobile__text" placeholder='Начните поиск'/>
        <div className="searchBlockMobile__icon _icon-search"></div>
    </div>
    <div onClick={()=>dispatch(setSearch(false))} className="searchBlockMobile__exit"></div>
    
    </div>
</div>

    </div>
  )
}

