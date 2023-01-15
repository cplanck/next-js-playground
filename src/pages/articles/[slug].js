import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import BasicCard from '../../components/Card'
import TemporaryDrawer from '../../components/SideDrawer'
import Button from '@mui/material/Button';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';


let fetchData = async(slug) => {
    let url = 'https://www.cryosphereinnovation.com/api/articles/?article=' + slug
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default function Article(props) {

    const { data, status } = useQuery(['apexCards'], fetchData)
    const router = useRouter()

    if(status == 'loading'){
        console.log('Waiting on data...')
        console.log(router.asPath)
        console.log(router.query)

    }
    else{
        console.log('Data received')
    }

    return(
            <>        
                <Link href="/">Home</Link>  
                <Link href="/articles/api-docs">API</Link>  
                <Link href="/articles/simb3-ctd">SIMB3 CTD</Link>       
                {props.data?<ArticleBody body={props.data[0].body}/>:'Henlo'}  
            </>
        )
}

function ArticleBody(props){
    return(
        <div dangerouslySetInnerHTML={{__html: props.body}}></div>
    )
}

export async function getStaticProps(context) {
        console.log(context)
        const { params } = context
        console.log(params.slug)
        const data = await fetchData(params.slug)
    return {
      props: {data}
    }
  }

export async function getStaticPaths() {
    return {
      paths: [{ params: { slug: 'api-docs' } }, { params: { slug: 'simb3-ctd' }}, { params: { slug: 'getting-started-with-the-simb3-datasheet' }}],
      fallback: false, // can also be true or 'blocking'
    }
}

// export async function getServerSideProps(context) {
//     console.log('hello')
//     console.log(context.query.slug)
//     const data = await fetchData(context.query.slug)
//     return{
//         props: {data}
//     }
// }


