import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Dashboard',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'sub',
        icon: 'icon-screen-desktop',
        children: [
          {
            state: 'home',
            name: 'Home'
          },
          {
            state: 'status',
            name: 'Status'
           }
          // {
          //   state: 'modern',
          //   name: 'Modern Version'
          // },
          // {
          //   state: 'clean',
          //   name: 'Clean Version'
          // },
          // {
          //   state: 'analytical',
          //   name: 'Analytical Version'
          // }
        ]
      },
      // {
      //   state: 'e-commerce',
      //   name: 'eCommerce',
      //   type: 'sub',
      //   icon: 'icon-basket',
      //   children: [
      //     {
      //       state: 'dashboard',
      //       name: 'Dashboard'
      //     },
      //     {
      //       state: 'products',
      //       name: 'Products'
      //     },
      //     {
      //       state: 'product-detail',
      //       name: 'Product Detail'
      //     },
      //     {
      //       state: 'product-edit',
      //       name: 'Product Edit'
      //     },
      //     {
      //       state: 'product-orders',
      //       name: 'Product Orders'
      //     },
      //     {
      //       state: 'product-cart',
      //       name: 'Product Cart'
      //     },
      //     {
      //       state: 'product-checkout',
      //       name: 'Product Checkout'
      //     }
      //   ]
      // },
      {
        state: 'inbox',
        name: 'Mail & Notifcations',
        type: 'sub',
        icon: 'icon-envelope-letter',
        // badge: [
        //   {
        //     type: 'primary',
        //     value: '5'
        //   }
        // ],
        children: [
          {
            state: 'mail-box',
            name: 'Mail Box'
          },
          {
            state: 'mail-details',
            name: 'Mail Details'
          },
          {
            state: 'compose-mail',
            name: 'Compose Mail'
          },
          {
            state: 'contact',
            name: 'Contact'
          },
          {
            state: 'contact-detail',
            name: 'Contact Detail'
          }
        ]
      },
      // {
      //   state: 'ui-element',
      //   name: 'UI Element',
      //   type: 'sub',
      //   icon: 'icon-equalizer',
      //   badge: [
      //     {
      //       type: 'danger',
      //       value: '18'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'wells',
      //       name: 'Panels and Wells'
      //     },
      //     {
      //       state: 'block-ui',
      //       name: 'Panels with BlockUI'
      //     },
      //     {
      //       state: 'buttons',
      //       name: 'Buttons'
      //     },
      //     {
      //       state: 'tabs',
      //       name: 'Tabs'
      //     },
      //     {
      //       state: 'modals',
      //       name: 'Modals'
      //     },
      //     {
      //       state: 'progress-bars',
      //       name: 'Progress Bars'
      //     },
      //     {
      //       state: 'notification',
      //       name: 'Notification'
      //     },
      //     {
      //       state: 'carousel',
      //       name: 'Carousel'
      //     },
      //     {
      //       state: 'user-cards',
      //       name: 'User Cards'
      //     },
      //     {
      //       state: 'timeline',
      //       name: 'Timeline'
      //     },
      //     {
      //       state: 'horizontal-timeline',
      //       name: 'Horizontal Timeline'
      //     },
      //     {
      //       state: 'rang-slider',
      //       name: 'Range Slider'
      //     },
      //     {
      //       state: 'ribbons',
      //       name: 'Ribbons'
      //     },
      //     {
      //       state: 'steps',
      //       name: 'Steps'
      //     },
      //     {
      //       state: 'bootstrap-ui',
      //       name: 'Bootstrap UI'
      //     }
      //   ]
      // },
      {
        state: 'forms',
        name: 'Project Forms',
        type: 'sub',
        icon: 'icon-notebook',
        children: [
          {
            state: 'presales-inputs-form',
            name: 'Presales Inputs Form'
          },
          {
            state: 'formFi',
            name: ' Project Financial Inputs '
          } ,
          {
            state: 'formPmi',
            name: ' Project Management Inputs '
          }
          // ,

          // {
          //   state: 'basic',
          //   name: 'Basic Forms'
          // },
          // {
          //   state: 'form-layout',
          //   name: 'Form Layout'
          // },
          // {
          //   state: 'control',
          //   name: 'Icheck Control'
          // },
          // {
          //   state: 'addons',
          //   name: 'From Addons'
          // },
          // {
          //   state: 'upload',
          //   name: 'File Upload'
          // },
          // {
          //   state: 'picker',
          //   name: 'Form Pickers'
          // }


        ]
      },
      // {
      //   state: 'tables',
      //   name: 'Tables',
      //   type: 'sub',
      //   icon: 'icon-grid',
      //   children: [
      //     {
      //       state: 'basic',
      //       name: 'Basic Tables'
      //     },
      //     {
      //       state: 'table-layout',
      //       name: 'Table Layouts'
      //     },
      //     {
      //       state: 'data-table',
      //       name: 'Data Tables'
      //     },
      //     {
      //       state: 'bootstrap',
      //       name: 'Bootstrap Tables'
      //     },
      //     {
      //       state: 'inline-edit',
      //       name: 'Editable Tables'
      //     }
      //   ]
      // },
      // {
      //   state: 'charts',
      //   name: 'Charts',
      //   type: 'sub',
      //   icon: 'icon-pie-chart',
      //   children: [
      //     {
      //       state: 'morris-js',
      //       name: 'MorrisJS'
      //     },
      //     {
      //       state: 'peity',
      //       name: 'Peity'
      //     },
      //     {
      //       state: 'knob',
      //       name: 'Knob'
      //     },
      //     {
      //       state: 'spark-lines',
      //       name: 'Spark-lines'
      //     }
      //   ]
      // },
      {
        state: 'widgets',
        name: 'Settings',
        type: 'link',
        icon: 'icon-settings'
      },
      // {
      //   state: 'icons',
      //   name: 'Icons',
      //   type: 'sub',
      //   icon: 'icon-bulb',
      //   children: [
      //     {
      //       state: 'simple',
      //       name: 'Simple Line'
      //     },
      //     {
      //       state: 'font-awesome',
      //       name: 'Fontawesome'
      //     }
      //   ]
      // },
      // {
      //   state: 'map',
      //   name: 'Maps',
      //   type: 'sub',
      //   icon: 'icon-location-pin',
      //   children: [
      //     {
      //       state: 'google',
      //       name: 'Google'
      //     }, {
      //       state: 'vector',
      //       name: 'Vector'
      //     }
      //   ]
      // },
      // {
      //   state: 'extra-pages',
      //   name: 'Pages',
      //   type: 'sub',
      //   icon: 'icon-docs',
      //   badge: [
      //     {
      //       type: 'success',
      //       value: '18'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'error',
      //       name: 'Error',
      //       type: 'sub',
      //       icon: 'icon-ban',
      //       children: [
      //         {
      //           state: 'error-400',
      //           name: '400'
      //         },
      //         {
      //           state: 'error-403',
      //           name: '403'
      //         },
      //         {
      //           state: 'error-404',
      //           name: '404'
      //         },
      //         {
      //           state: 'error-500',
      //           name: '500'
      //         },
      //         {
      //           state: 'error-503',
      //           name: '503'
      //         }
      //       ]
      //     },
      //     {
      //       state: 'blank-starter',
      //       name: 'Starter Page',
      //     },
      //     {
      //       state: 'blank-page',
      //       name: 'Blank Page',
      //     },
      //     {
      //       state: 'search',
      //       name: 'Search Result',
      //     },
      //     {
      //       state: 'custom-scroll',
      //       name: 'Custom Scroll',
      //     },
      //     {
      //       state: 'login',
      //       name: 'Login Page',
      //       target: true
      //     },
      //     {
      //       state: 'lock-screen',
      //       name: 'Lock Screen',
      //       target: true
      //     },
      //     {
      //       state: 'recover-password',
      //       name: 'Recover Password',
      //       target: true
      //     },
      //     {
      //       state: 'animations',
      //       name: 'Animations',
      //     },
      //     {
      //       state: 'user-profile',
      //       name: 'Profile',
      //     },
      //     {
      //       state: 'invoice',
      //       name: 'Invoice',
      //     },
      //     {
      //       state: 'gallery',
      //       name: 'Gallery',
      //     },
      //     {
      //       state: 'pricing',
      //       name: 'Pricing',
      //     },
      //     {
      //       state: 'register',
      //       name: 'Register',
      //       target: true
      //     }
      //   ]
      // },
      // {
      //   state: 'calendar',
      //   name: 'Calendar',
      //   type: 'link',
      //   icon: 'icon-calender'
      // }
    ],
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
