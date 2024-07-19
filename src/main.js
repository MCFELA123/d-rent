import React from 'react'
import user from './img/john-doe.jpg'
import mavicAirTwo from './img/pngimg.com - mavic_PNG18.png'
import air from './img/air2.png'
import mini from './img/mini-two.png'

export const main = () => {
  return (
    <div>
        <div className="header-container d-align">
         <div className="header d-center">
         <div className="header-span left user">
            <div className="user-group d-center">
              <img src={user} alt="" />
              <div className="user-badge"></div>
            </div>
          </div>
          <div className="header-span right icons">
          <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 24 24"
  fill="none"
  stroke-width="2.3"
  stroke-linecap="round"
  stroke-linejoin="round">
<path d="M20 7h-9" />
  <path d="M14 17H5" />
  <circle cx="17" cy="17" r="3" />
  <circle cx="7" cy="7" r="3" />
</svg>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='bell-holde'>
<path d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"/>
<path className='bel' d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"/>
</svg>
 </div>
         </div>
        </div>
        <br />
        <br />
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <div style={{
          width: '80%',
          height: '100%',
          position: 'absolute'
        }}>
            <text style={{
              lineHeight: '2em'
            }}><text style={{
              fontSize: '1.3em',
              color: '#5b72f1'
            }}>Hi John,</text> <br />
            <text style={{
              fontSize: '2em',
            }} className='white-col'>Explore top notch drones.</text>
            </text>
                <br />
                <br />
                <br />
            <div style={{width: '100%'}}>
              <div>
                 <div style={{float: 'left'}}>
          <text style={{fontSize: '1.2em'}} className='off-white-col2 med'>Most popular</text>
        </div>
        
        <div style={{float: 'right'}}>
          <text style={{color: '#5b72f1', fontSize: '1.2em'}}>See all</text>
        </div><br /><br />
        <div className="search-bar dAlign">
          <div className="input-icon d-center">
            <label htmlFor="inputBar" className='d-center'>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='search-icon'>
        <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            </label>
          </div>
                  <div className="input-bar">
                    <input type="text" placeholder='DJI mini 2' id='inputBar'/>
                  </div>
                  <div className="input-settings d-center">
                  <svg width="35" height="35" className='browse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.62918 14.2761C5.64802 13.8623 5.32784 13.5116 4.91406 13.4928C4.50027 13.4739 4.14957 13.7941 4.13073 14.2079L5.62918 14.2761ZM9.08026 18.995L9.04067 19.744C9.05385 19.7447 9.06705 19.745 9.08026 19.745L9.08026 18.995ZM14.3297 18.995V19.745C14.3429 19.745 14.3561 19.7447 14.3693 19.744L14.3297 18.995ZM19.2792 14.2079C19.2603 13.7941 18.9096 13.4739 18.4959 13.4928C18.0821 13.5116 17.7619 13.8623 17.7807 14.2761L19.2792 14.2079ZM4.12996 14.242C4.12996 14.6562 4.46574 14.992 4.87996 14.992C5.29417 14.992 5.62996 14.6562 5.62996 14.242H4.12996ZM4.87996 12.831H5.62996C5.62996 12.8196 5.6297 12.8082 5.62917 12.7967L4.87996 12.831ZM9.08026 8.077V7.327C9.06706 7.327 9.05386 7.32735 9.04067 7.32805L9.08026 8.077ZM14.3297 8.077L14.3692 7.32805C14.3561 7.32735 14.3429 7.327 14.3297 7.327V8.077ZM18.53 12.831L17.7807 12.7967C17.7802 12.8082 17.78 12.8196 17.78 12.831L18.53 12.831ZM17.78 14.242C17.78 14.6562 18.1157 14.992 18.53 14.992C18.9442 14.992 19.28 14.6562 19.28 14.242H17.78ZM4.88008 13.492C4.46587 13.492 4.13008 13.8278 4.13008 14.242C4.13008 14.6562 4.46587 14.992 4.88008 14.992V13.492ZM8.29258 14.992C8.7068 14.992 9.04258 14.6562 9.04258 14.242C9.04258 13.8278 8.7068 13.492 8.29258 13.492V14.992ZM7.54246 14.242C7.54246 14.6562 7.87824 14.992 8.29246 14.992C8.70667 14.992 9.04246 14.6562 9.04246 14.242H7.54246ZM9.04246 13.214C9.04246 12.7998 8.70667 12.464 8.29246 12.464C7.87824 12.464 7.54246 12.7998 7.54246 13.214H9.04246ZM9.04246 14.241C9.04246 13.8268 8.70667 13.491 8.29246 13.491C7.87824 13.491 7.54246 13.8268 7.54246 14.241H9.04246ZM7.54246 15.268C7.54246 15.6822 7.87824 16.018 8.29246 16.018C8.70667 16.018 9.04246 15.6822 9.04246 15.268H7.54246ZM8.29246 13.491C7.87824 13.491 7.54246 13.8268 7.54246 14.241C7.54246 14.6552 7.87824 14.991 8.29246 14.991V13.491ZM15.1175 14.991C15.5317 14.991 15.8675 14.6552 15.8675 14.241C15.8675 13.8268 15.5317 13.491 15.1175 13.491V14.991ZM18.53 14.991C18.9442 14.991 19.28 14.6552 19.28 14.241C19.28 13.8268 18.9442 13.491 18.53 13.491V14.991ZM15.1175 13.491C14.7032 13.491 14.3675 13.8268 14.3675 14.241C14.3675 14.6552 14.7032 14.991 15.1175 14.991V13.491ZM14.3675 14.241C14.3675 14.6552 14.7032 14.991 15.1175 14.991C15.5317 14.991 15.8675 14.6552 15.8675 14.241H14.3675ZM15.8675 13.214C15.8675 12.7998 15.5317 12.464 15.1175 12.464C14.7032 12.464 14.3675 12.7998 14.3675 13.214H15.8675ZM15.8675 14.241C15.8675 13.8268 15.5317 13.491 15.1175 13.491C14.7032 13.491 14.3675 13.8268 14.3675 14.241H15.8675ZM14.3675 15.268C14.3675 15.6822 14.7032 16.018 15.1175 16.018C15.5317 16.018 15.8675 15.6822 15.8675 15.268H14.3675ZM8.02996 8.089C8.02996 8.50321 8.36574 8.839 8.77996 8.839C9.19417 8.839 9.52996 8.50321 9.52996 8.089H8.02996ZM8.77996 8.077H8.02996H8.77996ZM14.0301 8.104C14.0301 8.51821 14.3659 8.854 14.7801 8.854C15.1943 8.854 15.5301 8.51821 15.5301 8.104H14.0301ZM4.13073 14.2079C3.99902 17.1017 6.17486 19.5925 9.04067 19.744L9.11985 18.246C7.112 18.1399 5.53333 16.3821 5.62918 14.2761L4.13073 14.2079ZM9.08026 19.745H14.3297V18.245H9.08026V19.745ZM14.3693 19.744C17.2351 19.5925 19.4109 17.1017 19.2792 14.2079L17.7807 14.2761C17.8766 16.3821 16.2979 18.1399 14.2901 18.246L14.3693 19.744ZM5.62996 14.242V12.831H4.12996V14.242H5.62996ZM5.62917 12.7967C5.53286 10.6904 7.11166 8.93209 9.11984 8.82595L9.04067 7.32805C6.1744 7.47954 3.99839 9.97098 4.13074 12.8653L5.62917 12.7967ZM9.08026 8.827H14.3297V7.327H9.08026V8.827ZM14.2901 8.82595C16.2983 8.93209 17.8771 10.6904 17.7807 12.7967L19.2792 12.8653C19.4115 9.97098 17.2355 7.47954 14.3692 7.32805L14.2901 8.82595ZM17.78 12.831V14.242H19.28V12.831H17.78ZM4.88008 14.992H8.29258V13.492H4.88008V14.992ZM9.04246 14.242V13.214H7.54246V14.242H9.04246ZM7.54246 14.241V15.268H9.04246V14.241H7.54246ZM8.29246 14.991H15.1175V13.491H8.29246V14.991ZM18.53 13.491H15.1175V14.991H18.53V13.491ZM15.8675 14.241V13.214H14.3675V14.241H15.8675ZM14.3675 14.241V15.268H15.8675V14.241H14.3675ZM9.52996 8.089V8.077H8.02996V8.089H9.52996ZM9.52996 8.077C9.52996 6.77382 10.5551 5.75 11.78 5.75V4.25C9.69114 4.25 8.02996 5.98142 8.02996 8.077H9.52996ZM11.78 5.75C13.0049 5.75 14.0301 6.77382 14.0301 8.077H15.5301C15.5301 5.98142 13.8689 4.25 11.78 4.25V5.75ZM14.0301 8.077V8.104H15.5301V8.077H14.0301Z"/>
                </svg>
                  </div>
                </div>
                <br />
            <div className='data-list-container'>
                <div className='data-group-list'>
                <div className="data-list">
                  <div className='inner'>
                    <div className="draw"></div>
                    <div className="action d-center">
                      <div className='p0'>
                        <br /><br /><br />
                        <center>
                          <img src={mavicAirTwo} className='rtdeg' alt="" />
                        </center>
                        <br />
                        <div className='object-details'>
                        <text className='ink-text bold'>DJI Mavic 3</text>
                        <br /><text className='off-white-col med'>Wide Range Drone</text>
                        <br />
                        <div className="object-child-details">
                          <div className="hr-inverse"></div>
                          <div className="child-status">
                            <text className='green-col light'>Rent</text> <br />
                            <text className='tagged'>$60.00 </text>
                            <text className='off-white-col med'>per day</text>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-list">
                <div className='inner'>
                    <div className="draw"></div>
                    <div className="action d-center">
                      <div className='p0'>
                        <br /><br /><br />
                        <center>
                          <img src={air} className='air' alt="" />
                        </center>
                        <br />
                        <div className='object-details'>
                        <text className='ink-text bold'>DJI Air 2</text>
                        <br /><text className='off-white-col med'>Speedster Drone</text>
                        <br />
                        <div className="object-child-details">
                          <div className="hr-inverse"></div>
                          <div className="child-status">
                            <text className='red-col light'>Out of stock</text> <br />
                            <text className='tagged'>$60.00 </text>
                            <text className='off-white-col med'>per day</text>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-list">
                <div className='inner'>
                    <div className="draw"></div>
                    <div className="action d-center">
                      <div className='p0'>
                        <br /><br /><br />
                        <center>
                          <img src={mini} className='rtdeg' alt="" />
                        </center>
                        <br />
                        <div className='object-details'>
                        <text className='ink-text bold'>DJI Mini 2</text>
                        <br /><text className='off-white-col med'>Power Swift Drone</text>
                        <br />
                        <div className="object-child-details">
                          <div className="hr-inverse"></div>
                          <div className="child-status">
                            <text className='warning light'>Pending</text> <br />
                            <text className='tagged'>$60.00 </text>
                            <text className='off-white-col med'>per day</text>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default main