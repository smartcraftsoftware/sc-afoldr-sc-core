import DocumentTitle from './DocumentTitle'

const HeaderScripts = () => {
  // const isDevMode = import.meta.env.MODE === 'development'

  return (
    <>
      <DocumentTitle />
      {/* {!isDevMode && (
      put on your production trackers here
        <>
          <ProductionTrackers />
        </>
      )} */}
    </>
  )
}

export default HeaderScripts
