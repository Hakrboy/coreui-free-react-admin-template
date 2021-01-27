import React, { lazy, Component } from 'react'
import Select from 'react-select'
import { RangeDatePicker } from '@y0c/react-datepicker'
import '@y0c/react-datepicker/assets/styles/calendar.scss'
import 'moment/locale/en-in'
import {
  CLabel,
  CSelect,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CFormGroup,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const options = [
  { value: '1', label: 'ANUSHREE SAREES' },
  { value: '2', label: 'LUCKY WOMAN' },
  { value: '3', label: 'HARSHEE CREATION' },
  { value: '4', label: 'JASLEEN FASHION' },
  { value: '5', label: 'KASHI KUNJ' }
]
const salerep = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Sale Report
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
            <CRow>
              <CCol xs="12">
                <CLabel htmlFor="conum">Selected Company</CLabel>
                <Select isMulti name="conum" id="conum" options={options} defaultValue={[options[0]]} />
              </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                <CLabel htmlFor="repchoice">Select Report</CLabel>
                <CSelect custom name="repchoice" id="repchoice">
                  <option value="1" selected>SUMMARY BASED SALE REPORT</option>
                  <option value="2">ITEM BASED SALE REPORT</option>
                  <option value="3">AGENT BASED SALE REPORT</option>
                  <option value="4">STATION BASED SALE REPORT</option>
                </CSelect>
              </CCol>
              <CCol xs="6">
                <CLabel htmlFor="dat">Date Range</CLabel>
                <RangeDatePicker name="dat" id="dat" locale="en-in"/>
              </CCol>
              </CRow>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default salerep