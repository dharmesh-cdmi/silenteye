export default function InfoCard(props) {
  const{title="",titleRight="",className="",children=""}=props
  return (
      <section className={`${className}  shadow-blue-200 mx-auto w-[calc(100%-1rem)] max-w-7xl `}>
          <div className="capitalize flex justify-between flex-wrap items-center">
              <h2 className=" text-slate-400 font-medium">
                  {title}
              </h2>
              <div className="text-blue-600 font-semibold">{titleRight}</div>
          </div>
          <div className="rounded-lg py-1">
               {children}
          </div>
      </section>
  )

}