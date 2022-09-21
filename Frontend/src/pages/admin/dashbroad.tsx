/* eslint-disable react/style-prop-object */
import { ChartBar } from '../../components/Chart/BarChart'
import { ChartComposed } from '../../components/Chart/ComposedChart'
import { ChartPie } from '../../components/Chart/PieChart'
import StickyHeadTable from '../../layouts/Demo'
import { LayoutChart } from './components/layoutChart'
import { LayoutListed } from './components/layoutListed'

type Props = {}

const dashbroad = (props: Props) => {
  return (
    <>
      <section>
        <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div className="bg-white-800 pt-3">
            <div className="rounded-tl-3xl bg-gradient-to-r from-blue-500 to-gray-500 p-4 shadow text-2xl text-white">
              <h1 className="font-bold pl-2">Analytics</h1>
            </div>
          </div>
          <div className="flex flex-wrap">
            <LayoutListed name={"Total Revenue"} price={"$3249"} customStyle="from-green-200 to-green-100 border-b-4 border-green-600" style=" bg-green-600" />
            <LayoutListed name={"Total Users"} price={"249"}  customStyle="from-pink-200 to-pink-100 border-b-4 border-pink-500 " style=" bg-pink-600"/>
            <LayoutListed name={"New Users"} price={"2"} customStyle="from-yellow-200 to-yellow-100 border-b-4 border-yellow-600" style=" bg-yellow-600"/>
            <LayoutListed name={"Server Uptime"} price={"152 days"}  customStyle=" from-blue-200 to-blue-100 border-b-4 border-blue-500" style=" bg-blue-600"/>
            <LayoutListed name={"To Do List"} price={"7 tasks"} customStyle="from-indigo-200 to-indigo-100 border-b-4 border-indigo-500" style=" bg-indigo-600"/>
            <LayoutListed name={"Issues"} price={"3"} customStyle="from-red-200 to-red-100 border-b-4 border-red-500" style=" bg-red-600"/>
          </div>
          <div className="flex flex-row flex-wrap flex-grow mt-2">
            <LayoutChart children={<ChartBar />} title="Graph" />
            <LayoutChart children={<ChartPie />} title="Graph"  />
            <LayoutChart children={<ChartComposed />} title="Graph" />
            
            <LayoutChart children={<ChartBar />} title="Graph" />
            <LayoutChart children={<ChartPie />} title="Graph" />
            <LayoutChart children={<ChartComposed />} title="Graph" />
          </div>
        </div>
      </section>
      <StickyHeadTable />
    </>
  )
}

export default dashbroad