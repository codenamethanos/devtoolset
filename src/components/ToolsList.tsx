// components/ResourceList.tsx
import React from 'react'; // 确保导入 React
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge";

import { getDataList, getCategories } from '@/lib/data';

// type toolProps = {
//   name: string;
//   description: string;
//   url: string;
//   tags: string[]
// }

type categoryProps = {
  name: string,
  src: string,
  link: string
}


type toolsListProps = {
  category: categoryProps,
  showMoreLink?: boolean
}



const ToolsList: React.FC<toolsListProps> = ({ category, showMoreLink = true }) => {
  const srcList = getDataList(category.src)


  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight capitalize">{category.name}</h2>
        {showMoreLink && (
          <Link href={`/tools/${category.link}`} className="capitalize text-blue-600 hover:text-blue-800 transition-colors hover:underline">
            More {category.name} tools →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {srcList.slice(0,8).map((resource, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <div className='border border-gray-200 p-1 rounded-md mr-1'>
                  <img width="20" height="20" src={`https://favicon.im/${resource.url}`} alt="Hey.com favicon" />
                </div>
                <CardTitle className='capitalize'>{resource.name}</CardTitle>
                <ExternalLink size={16} className='ml-1' />
              </a>
              <CardDescription className='flex flex-col justify-between '>
                <div className='h-[60px] line-clamp-3 mt-1'>
                  {resource.description}
                </div>
                { resource.tags ? 
                  <div className='mt-3'>
                    <Badge variant="secondary">{resource.tags}</Badge>
                  </div> :
                 null
                }     
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

const ToolsPage: React.FC<toolsListProps> = ({ category }) => {
  const srcList = getDataList(category.src)

  return (
    <section>
      <div className="flex flex-col justify-between items-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter capitalize">{category.name}</h2>
        <p className='text-sm mt-2 opacity-60'>All tools are sorted alphabetically</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {srcList.slice(0,8).map((resource, index) => (
          <Card key={index} className='flex flex-col justify-between'>
            <CardHeader>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <div className='border border-gray-200 p-1 rounded-md mr-1'>
                  <img width="20" height="20" src={`https://favicon.im/${resource.url}`} alt="Hey.com favicon" />
                </div>
                <CardTitle className='capitalize'>{resource.name}</CardTitle>
                <ExternalLink size={16} className='ml-1' />
              </a>
              <CardDescription className='flex flex-col justify-between '>
                <div className='h-[60px] line-clamp-3 mt-1'>
                  {resource.description}
                </div>
                { resource.tags ? 
                  <div className='mt-3'>
                    <Badge variant="secondary">{resource.tags}</Badge>
                  </div> :
                 null
                }     
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}


const CategoryList = () => {
  const srcList = getCategories()


  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {srcList.slice(0,8).map((category, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={`/tools/${category.link}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <CardTitle className='capitalize'>{category.name}</CardTitle>
              </a>
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export { ToolsList, ToolsPage, CategoryList };