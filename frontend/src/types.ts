import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type Screen = {
    screenType: string,
    priority: number,
    importance: number,
    repetition: number,
    showPeriod: number,
    eventData: [
        {
            dataRU?: {
                empoyee: string,
                eventDate: string,
                photo: string,
                msgTitl: string,
                msgContent: string
            },
            dataEN?: {
                empoyee: string,
                eventDate: string,
                photo: string,
                msgTitl: string,
                msgContent: string
            }
        }
    ]
}

export type Event = {
    screenType: string,
    priority: number,
    importance: number,
    repetition: number,
    showPeriod: number,
    empoyee: string,
    eventDate: string,
    photo: string,
    msgTitl: string,
    msgContent: string
}