import ContentLoader from 'react-content-loader'

const Skeleton = props => (
  <ContentLoader viewBox="0 0 380 350"  {...props} className="max-w-sm">
    <rect x="0" y="17" rx="0" ry="0" width="380" height="240" />
    <rect x="0" y="270" rx="2" ry="2" width="275" height="20" />
    <rect x="0" y="300" rx="2" ry="2" width="220" height="20" />
  </ContentLoader>
)

export default Skeleton