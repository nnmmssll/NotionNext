
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BlogPostListPage from './components/BlogPostListPage'
import LayoutBase from './LayoutBase'

export const LayoutSearch = (props) => {
  const { keyword } = props
  const router = useRouter()
  const currentSearch = keyword || router?.query?.s
  useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById('container')
      if (container && container.innerHTML) {
        const re = new RegExp(`${currentSearch}`, 'gim')
        container.innerHTML = container.innerHTML.replace(re, `<span class='text-red-500 border-b border-dashed'>${currentSearch}</span>`)
      }
    },
    100)
  })
  return <LayoutBase {...props} currentSearch={currentSearch}>
    <div ic='container'>
      <BlogPostListPage {...props}/>
    </div>
  </LayoutBase>
}
