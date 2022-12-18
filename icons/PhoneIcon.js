export default {
  name: 'PhoneIcon',
  
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H5.87163C6.732 1.5 7.48197 2.08556 7.69064 2.92025L8.79644 7.34343C8.97941 8.0753 8.70594 8.84555 8.10242 9.29818L6.8088 10.2684C6.67447 10.3691 6.64527 10.5167 6.683 10.6197C7.81851 13.7195 10.2805 16.1815 13.3803 17.317C13.4833 17.3547 13.6309 17.3255 13.7316 17.1912L14.7018 15.8976C15.1545 15.2941 15.9247 15.0206 16.6566 15.2036L21.0798 16.3094C21.9144 16.518 22.5 17.268 22.5 18.1284V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H17.25C8.55151 22.5 1.5 15.4485 1.5 6.75V4.5Z" fill="#0F172A"/>
</svg>

  }
}