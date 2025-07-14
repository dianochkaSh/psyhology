import { Link } from '@mui/joy';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Typography from '@mui/joy/Typography';
import React from 'react';

export type BreadcrumbsItemType = {
  href?: string;
  title: string
}
export type BreadcrumbsItems = {
  items: BreadcrumbsItemType[],
  page: string
}

const BreadcrumbsItems:React.FC<BreadcrumbsItems> = ({ page, items}) => {
  return (
    <Breadcrumbs aria-label="breadcrumbs">
      {items.map((item: BreadcrumbsItemType, i:  number) => (
        <Link key={i} color="neutral" href={item.href}>  {item.title}</Link>
      ))}
      <Typography>{page}</Typography>
    </Breadcrumbs>
  )
}
export default BreadcrumbsItems;
