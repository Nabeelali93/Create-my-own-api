import {data} from './db'



import { NextRequest,NextResponse } from 'next/server'


export async function GET() {

let users = data


console.log(users)



    return NextResponse.json({
        data : users
    },{
        status:200
    })
}



