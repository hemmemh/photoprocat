import React from 'react'
import './modalAdmin.scss'


import { adminSlice } from '../../../store2/reducers/AdminSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { BrandModal } from './brandModal/BrandModal'
import { TypeModal } from './typeModal/TypeModal'
import { ProductModal } from './productModal/ProductModal'
import { Modal } from '../../UI/modal/Modal'

export  const ModalAdmin = () => {
    const {modal,modalSection} = useAppSelector(state=>state.reducer.admin)
    const {setModal} = adminSlice.actions
    const dispatch = useAppDispatch()


  return (
    <Modal active={modal} modalClass='admin' setActive={(e:boolean)=>dispatch(setModal(e))}>
        { modalSection === 1 ?  <BrandModal/>
        : modalSection === 2 ? <TypeModal/>
        : <ProductModal/>
        }
    </Modal>
  )
}

