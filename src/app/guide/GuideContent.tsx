import axios from 'axios';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import { GitHubReadme } from "react-github-readme-md";
import rehypeRaw from 'rehype-raw';
import { Card, CardContent } from '../../components/ui/card';
import { CardHeader } from '@material-tailwind/react';

const GuideContent = ({ contentUrl }) => {

    return (<>
        <Card>
            <CardContent className='mt-8'>
                <GitHubReadme src={contentUrl} />
            </CardContent>
        </Card>
    </>)
}

export default GuideContent;