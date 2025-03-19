import { useEffect } from 'react'

const DocumentTitle = () => {
  useEffect(() => {
    const appendDocumentTitle = async () => {
      let title = 'Smartcraft'
      try {
        //put the logic to get the title here and then store the right title in the title variable
        title = 'Smartcraft App'
      } catch (error) {
        console.error(error)
      } finally {
        document.title = title
      }
    }
    appendDocumentTitle()
  }, [])

  return null
}

export default DocumentTitle
