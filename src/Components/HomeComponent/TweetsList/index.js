import { KZ_IMG, PROFILE_IMG_THREE, PROFILE_IMG_TWO } from '../images'
import Tweet from './Tweet'

export default function TweetsList () {
    const tweets = [
        {
            authorName: 'Free KZ today',
            authorUserName: '@kz',
            img: KZ_IMG,
            content: 'hello everyone, this is my first tweet bfjsdlfivb iuybpveytip enyiptyebyier vyiwfrpiwjvepi tebryuipbjkfdbgjk dsfbgfjkdngk lsztvi rugu euifiuesgi besuigiesugh bufiesgius',
            replies: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'Cutypie',
            authorUserName: '@cutie',
            img: PROFILE_IMG_TWO,
            content: 'hello everyone, this is my first tweet',
            replies: 100,
            retweets: 500,
            likes: 200
        },
        {
            authorName: 'Everyday',
            authorUserName: '@heyyo',
            img: PROFILE_IMG_THREE,
            content: 'hello everyone, this is my first tweet',
            replies: 80,
            retweets: 400,
            likes: 300
        },
        {
            authorName: 'Free KZ today',
            authorUserName: '@kz',
            img: KZ_IMG,
            content: 'hello everyone, this is my first tweet',
            replies: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'Cutypie',
            authorUserName: '@cutie',
            img: PROFILE_IMG_TWO,
            content: 'hello everyone, this is my first tweet',
            replies: 100,
            retweets: 500,
            likes: 200
        },
        {
            authorName: 'Everyday',
            authorUserName: '@heyyo',
            img: PROFILE_IMG_THREE,
            content: 'hello everyone, this is my first tweet',
            replies: 80,
            retweets: 400,
            likes: 300
        },
    ]
    return (
       tweets.map ((tweet, index) => <Tweet {...tweet} key={index}/>)
    )
}