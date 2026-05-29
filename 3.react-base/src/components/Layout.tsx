import React, { useCallback, useDebugValue, useEffect, useState } from "react";



/**
 * Layout est un "Compound Component"
 * @see https://www.patterns.dev/react/compound-pattern/
 * 
 * @example 
 * 
 *    <Layout>
 *       <Layout.Left>Contenu Gauche</Layout.Left>
 *      <Layout.Right>Contenu Droite</Layout.Right>
 *    </Layout>
 */
const Layout  = ( { children } ) => {

    const leftContent = children.filter( c =>  c.type === Left)[0].props.children
    const rightContent = children.filter( c =>  c.type === Right)[0].props.children

    return (
        <main>
            <div>
                Left
                <hr />
                { leftContent }
            </div>
            <div>
                Right
                <hr />
                { rightContent }
            </div>
        </main>
    )
}


const Left = ({children}) => null

const Right = ({children}) => null

/**
 * A Gauche
 */
Layout.Left = Left;
Layout.Right = Right;

export default Layout;