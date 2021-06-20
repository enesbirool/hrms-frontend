import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Container, Menu } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink } from 'react-router-dom'
import LanguageSelector from '../Translator/LanguageSelector'

class Navi extends React.Component{
    render(){
        const {t}=this.props;
       return (
        <div>
            <Menu inverted fixed="top" style={{webkitBoxShadow: "5px 4px 5px #9E9E9E"}}>
                <Container>
                    <Menu.Item as={NavLink} to="/"
                        name={t('Home')} />
                    <Menu.Item as={NavLink} to="/contact"
                        name={t('Contact Us')} />
                    <Menu.Item as={NavLink} to="/about"
                        name={t('About' )}/>
                    <Menu.Menu position='right'>
                        <LanguageSelector></LanguageSelector>            
                        <SignedOut />
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    ) 
    }
    
}

const TopBarWithTranslation=withTranslation()(Navi);
export default TopBarWithTranslation;