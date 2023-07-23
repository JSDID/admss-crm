import clsx from 'clsx'
import { toAbsoluteUrl } from '../../../helpers'
import { HeaderUserMenu } from '../../../partials'
import { useLayout } from '../../core'

const itemClass = 'ms-1 ms-md-4'
const userAvatarClass = 'symbol-35px'

const Navbar = () => {
    const { config } = useLayout()
    return (
        <div className='app-navbar flex-shrink-0'>
            <div className={clsx('app-navbar-item', itemClass)}>
                <div
                    className={clsx('cursor-pointer symbol', userAvatarClass)}
                    data-kt-menu-trigger="{default: 'click'}"
                    data-kt-menu-attach='parent'
                    data-kt-menu-placement='bottom-end'
                >
                    <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                </div>
                <HeaderUserMenu />
            </div>

            {config.app?.header?.default?.menu?.display && (
                <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
                    <div
                        className='btn btn-icon btn-active-color-primary w-35px h-35px'
                        id='kt_app_header_menu_toggle'
                    >
                    </div>
                </div>
            )}
        </div>
    )
}

export { Navbar }
