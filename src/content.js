import Main from './main'
import './index.css'

export const content = () => {

      const frontUI = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'none',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 999,
        position: 'absolute'
      }

      let em = 'em'
      let px = 'px';
      const textUI = {
      left: '0',
      bottom: '0',
      width: '100%',
      height: 22+em,
      paddingTop: 1+em,
      position: 'absolute',
      }

      const rentUI = {
        fontSize: '6vmax',
        fontWeight: '700',
        color: 'white',
      }

      const drone_logoUI = {
        width: 5+em,
        height: 5+em,
        background: 'white',
        position: 'absolute',
        top: 3+em,
        left: 2+em,
        borderRadius: 3+em
      }

      function arrow() {
      const arrow = document.querySelectorAll('.btn-primary');
        const arrowRight = document.querySelectorAll('.arrow');
      arrow.forEach(element => {
        if(element.onmouseenter = true) {
      arrowRight.forEach(elements => {
        elements.style.marginLeft = 12+px;
        elements.style.opacity = '1';
      })}    
    });
      }
      
      function rem() {
        const arrowse = document.querySelectorAll('.arrow');
        arrowse.forEach(elementl => {
            elementl.style.marginLeft = 0;
            elementl.style.opacity = 0
      })
      }

      function mainUI() {
     var frontUI = document.getElementById('frontUI')
        frontUI.style.borderRadius = '1.5em'
     frontUI.style.transform = 'translateX(-100%)'
     frontUI.style.opacity = .4
      }
     
    /*  function arrowFalse() {
        
        const arrow = document.querySelectorAll('.btn-primary');
          var arrowRight = document.getElementById('arrow');
        arrow.forEach(element => {
          if(element.onmouseleave = true) {
            arrowRight.setAttribute('style', 'margin-left:10px !important; transition: all .3s ease !important');
          }
      });
        }
*/


  return (
    <main>
      {/* <div className="blur d-center"> */}
        {/* <div className="bl"></div> */}
      {/* </div> */}
        <div style={frontUI} className='front-ui' id='frontUI'>
                <div className="d-center svg-drone" style={drone_logoUI}>                   
                    <svg viewBox="0 0 22 22" width={3.5+em}  xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 3a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 1.0859375-.2070312c.5392711.8209481.9140625 1.6424172.9140625 2.2070312 0 .563623-.3724493 1.384498-.9101562 2.205078a3 3 0 0 0 -1.0898438-.205078 3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 -.2050781-1.080078c.8233483-.542436 1.6446221-.919922 2.2050781-.919922.55949 0 1.37815.375313 2.201172.916016a3 3 0 0 0 -.201172 1.083984 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 -3-3 3 3 0 0 0 -1.085938.207031c-.539273-.820943-.914062-1.642417-.914062-2.207031 0-.563623.372445-1.3844956.910156-2.2050781a3 3 0 0 0 .002.00195 3 3 0 0 0 1.087844.2031281 3 3 0 0 0 3-3 3 3 0 0 0 -3-3 3 3 0 0 0 -3 3 3 3 0 0 0 .205078 1.0800781c-.823351.5424443-1.644622.9199219-2.205078.9199219-.55949 0-1.3781473-.3753084-2.2011719-.9160156a3 3 0 0 0 .2011719-1.0839844 3 3 0 0 0 -3-3zm0 1a2 2 0 0 1 2 2 2 2 0 0 1 -.0527344.453125c-.4577913-.368834-.8926099-.7589139-1.2402344-1.1601562a1 1 0 0 0 -.6933593-.2929688 1 1 0 0 0 -.7207031.2929688 1 1 0 0 0 0 1.4140624 1 1 0 0 0 .058594.054688c.3824613.333788.7551689.7476371 1.1074216 1.1835933a2 2 0 0 1 -.4589844.0546875 2 2 0 0 1 -2-2 2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -.457031-.054687c.37051-.4592027.761959-.8951713 1.164062-1.2382813a1 1 0 0 0 0-1.4140624 1 1 0 0 0 -1.414062 0 1 1 0 0 0 -.05274.054687c-.337606.3818392-.750702.7543351-1.185541 1.1054687a2 2 0 0 1 -.054688-.453125 2 2 0 0 1 2-2zm-10 10a2 2 0 0 1 .4570312.05469c-.3705108.459203-.7619484.895165-1.1640624 1.238281a1 1 0 0 0 0 1.414062 1 1 0 0 0 1.4140624 0 1 1 0 0 0 .052734-.05469c.3376223-.381857.7507063-.754333 1.1855473-1.105468a2 2 0 0 1 .0546875.453125 2 2 0 0 1 -2 2 2 2 0 0 1 -2-2 2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -2-2 2 2 0 0 1 .05273-.453125c.457792.368835.892604.758903 1.240235 1.160156a1 1 0 0 0 1.414062 0 1 1 0 0 0 0-1.414062c-.01717-.01465-.0336-.03387-.05078-.04883a1 1 0 0 0 -.0078-.0059c-.382475-.333732-.755177-.747602-1.107431-1.183551a2 2 0 0 1 .458984-.054688z" style={{fill:'#43496b',fillOpacity:'1',stroke:'none'}} class="ColorScheme-Text"/></svg>
                </div>

            <div style={textUI} className='d-center text-ui'>
                <div className='main-ui'><br /><br />
                    <div className="rent-ui">
                    <text style={rentUI} className='rent-ui'>RENT DRONE</text>
                    </div>
                <svg viewBox="0 0 450 50" className='svg'>
                 <text y="50">EFORTLESSLY</text>
                </svg><br /><br />
                <button className='btn-primary' onClick={mainUI} onMouseEnter={arrow} onMouseLeave={rem}>
                    Get started
                    <svg fill="white" className='arrow' width={15+px} style={{
                        marginLeft: 0,
                        opacity: 0,
                        transition: 'all .3s ease'
                    }} id='arrow' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                    </path>
                    </g>
                    </svg>
                </button>
                </div>
            </div>
        </div>
        <div className="mainUI">
          <Main />
        </div>
    </main>
  )
}

export default content