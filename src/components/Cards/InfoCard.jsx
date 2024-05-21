export default function InfoCard(props) {
  const{title="",titleRight="",className="",children=""}=props
  return (
      <section className={`${className}  shadow-blue-200 mx-auto w-[calc(100%-1rem)]  `}>
          <div className="capitalize flex justify-between flex-wrap items-center text-[16px] weight-[500]">
              <h2 className=" text-slate-400  ">
                  {title}
              </h2>
              <div className="text-blue-600 ">{titleRight}</div>
          </div>
          <div className="rounded-lg py-1 text-[18px] weight-[500]">
               {children}
          </div>
      </section>
  )

}