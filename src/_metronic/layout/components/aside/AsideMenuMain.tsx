/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
    const intl = useIntl()

    return (
        <>
            <AsideMenuItem
                to='/dashboard'
                icon='/media/icons/duotune/graphs/gra001.svg'
                title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
                fontIcon='bi-app-indicator'
            />
            {/*<div className='menu-item'>
                <div className='menu-content pt-8 pb-2'>
                    <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
                </div>
            </div>*/}
            {/*<AsideMenuItemWithSub
                to='/crafted/pages'
                title='Pages'
                fontIcon='bi-archive'
                icon='/media/icons/duotune/general/gen022.svg'
            >
                <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
                    <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true}/>
                    <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true}/>
                    <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true}/>
                    <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true}/>
                    <AsideMenuItem
                        to='/crafted/pages/profile/connections'
                        title='Connections'
                        hasBullet={true}
                    />
                </AsideMenuItemWithSub>

                <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
                    <AsideMenuItem
                        to='/crafted/pages/wizards/horizontal'
                        title='Horizontal'
                        hasBullet={true}
                    />
                    <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true}/>
                </AsideMenuItemWithSub>
            </AsideMenuItemWithSub>*/}
        </>
    )
}
