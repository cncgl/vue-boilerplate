// Route
import Top from 'components/Top'
import User from 'components/User'
import Repo from 'components/Repo'
import about from 'pages/about'
import blog from 'pages/blog'
import contact from 'pages/contact'

export default {
  '/': {
    component: Top
  },
  '/blog': {
    component: blog
  },
  '/about': {
    component: about
  },
  'contact': {
    component: contact
  },
  '/search/user': {
    component: User
  },
  '/search/repo': {
    component: Repo
  }
}