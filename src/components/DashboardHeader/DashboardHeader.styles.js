// @flow

import React from "react";

import styled from 'styled-components';
import type { ComponentType } from 'react';

import CarretUp from "assets/caret-up.svg";
import CarretDown from "assets/caret-down.svg";


export const MainContainer: ComponentType<*> = (() => {
  const
    classes = 'sticky-header govuk-!-padding-top-3',
    Node = styled.div`
      background-color: rgba(255, 255, 255, 0.95);
      z-index: 999999;
    `;

  return ({ className, ...props }) =>
    <Node className={ `${classes} ${className}` } { ...props }/>
})();


export const HeaderContainer: ComponentType<*> = (() => {

    return styled.div`
        display: flex;
        justify-content: space-between;
    `;

})();


export const TitleButton: ComponentType<*> =
    styled
        .button
        .attrs(() => ({
            role: 'button',
            htmlType: 'button',
            'aria-label': 'Click to change location'
        }))` 
            display: a;
            cursor: pointer;
            background: url("${ CarretDown }");
            background-repeat: no-repeat;
            background-size: 20px 20px;
            padding-right: 20px;
            padding-left: 0;
            margin-left: 5px;
            background-position: center right;
            color: #1d70b8;
            text-decoration: none;
            
            &.open {
            background: url("${ CarretUp }");
                background-repeat: no-repeat;
                background-size: 20px 20px;
                padding-right: 20px;
                padding-left: 0;
                margin-left: 0;
                background-position: center right;
            }
        `


export const Title: ComponentType<*> =
    styled
        .h1
        .attrs(({ className }) => ({
            className: `govuk-caption-l govuk-!-margin-0 ${ className }`
        }))``;
    // <h1 className={  }>
    //         { pageName }
    //         {
    //             hasPicker
    //                 ? <>&nbsp;<Node htmlType={ "button" }
    //                                 role={ "button" }
    //                                 className={ className }
    //                                 { ...props }/>
    //                 </>
    //                 : null
    //         }
    //     </h1>


//     (() => {
//
//     return ({ pageName, className, hasPicker, ...props }) =>
//
//
// })();


export const CurrentLocation: ComponentType<*> = (() => {

    return styled.span`
      font-weight: normal;
    `

})();


export const CollapsibleLinkContainer: ComponentType<*> = (() => {
  return styled.div`
  display: flex;
  flex-wrap: wrap;

  // justify-self: space-between;
  `
})();


export const CollapsibleLink: ComponentType<*> = (() => {
  const
    Node = styled.button`
      cursor: pointer;
      font-weight: bold;
      outline: none;
      color: #1d70b8;
      justify-self: flex-end;
      
      &::before {
        padding-right: 4px;
      }
      
      &.closed::before {
        content: "►";
      }

      &.opened::before {
        content: "▼";
      }
    `;

  return ({ className="", ...props }) =>
    <Node className={ `govuk-body-s govuk-body govuk-!-margin-bottom-0 ${ className }` }
          htmlType={ "button" }
          { ...props }/>
})();


export const LocationPickerContainer: ComponentType<*> = (() => {

    return styled.div`
        width: 100%;
        justify-self: stretch;
    `

})()


export const SectionBreak = ({ className, ...props }) => (
  <hr className={ `govuk-section-break govuk-section-break--m govuk-!-margin-top-2 govuk-!-margin-bottom-0 govuk-section-break--visible ${className}` } { ...props }/>
);


export const Select: ComponentType<*> = (() => {

  const Node = styled.select`
    width: 100%;
  `;

  return ({ ...props }) =>
      <div className={ "govuk-grid-column-one-quarter" }>
        <div className={ "govuk-form-group govuk-!-margin-bottom-0" }>
          <Node { ...props }/>
        </div>
      </div>
})();


export const LocalisationForm = styled.form`
    padding: 0 1rem;
    
    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`;


export const LocalisationFormInputs = styled.div`
    display: flex !important;
    align-items: flex-end;
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        
        & > * {
            padding: 0;
            margin-top: 1rem;
        }
    }
`;