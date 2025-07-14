
import BreadcrumbsItems from '@/components/BreadcrumbsItems';

const Breadcrumbs = ({ titlePage,  listBreadcrumbs }) => {
 return (
    <BreadcrumbsItems page={titlePage} items={listBreadcrumbs} />
  )
}

export default  Breadcrumbs;
