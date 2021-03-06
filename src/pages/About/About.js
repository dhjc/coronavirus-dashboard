// @flow

import React from 'react';

import toc from "remark-toc";
import slug from "remark-slug";
import html from "remark-html";
import remark from "remark";
import externalLink from "remark-external-links";

import { Loading } from './About.styles';
import useGenericAPI from 'hooks/useGenericAPI';
import BrowserHistory from "components/BrowserHistory";

import type { AboutProps } from './About.types';
import type { ComponentType } from "react";


const About: ComponentType<AboutProps> = ({ ...props }) => {

    let data = useGenericAPI("about", [], "text");

    if ( !data ) return <Loading>Loading&hellip;</Loading>;

    remark()
        .use(toc)
        .use(slug)
        .use(externalLink)
        .use(html)
        .process(data, (err, text) => {
            data = err ? data : String(text);
        });

    return <BrowserHistory data={data}/>


};  // About

export default About;