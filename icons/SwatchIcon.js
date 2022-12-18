export default {
  name: 'SwatchIcon',
  
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';

    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs
  
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...ctx.data}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 4.125C2.25 3.08947 3.08947 2.25 4.125 2.25H9.375C10.4105 2.25 11.25 3.08947 11.25 4.125V17.25C11.25 19.7353 9.23528 21.75 6.75 21.75C4.26472 21.75 2.25 19.7353 2.25 17.25V4.125ZM6.75 18.375C7.37132 18.375 7.875 17.8713 7.875 17.25C7.875 16.6287 7.37132 16.125 6.75 16.125C6.12868 16.125 5.625 16.6287 5.625 17.25C5.625 17.8713 6.12868 18.375 6.75 18.375Z" fill="#0F172A"/>
<path d="M10.719 21.75H19.8751C20.9106 21.75 21.7501 20.9105 21.7501 19.875V14.625C21.7501 13.5895 20.9106 12.75 19.8751 12.75H19.7353L10.9927 21.4926C10.9035 21.5818 10.8122 21.6676 10.719 21.75Z" fill="#0F172A"/>
<path d="M12.7383 17.6255L19.2125 11.1512C19.9448 10.419 19.9448 9.23179 19.2125 8.49955L15.5002 4.78724C14.768 4.05501 13.5808 4.05501 12.8486 4.78724L12.7498 4.88598V17.25C12.7498 17.3761 12.7459 17.5013 12.7383 17.6255Z" fill="#0F172A"/>
</svg>

  }
}