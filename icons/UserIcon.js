export default {
  name: 'UserIcon',
  
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49996 6C7.49996 3.51472 9.51468 1.5 12 1.5C14.4852 1.5 16.5 3.51472 16.5 6C16.5 8.48528 14.4852 10.5 12 10.5C9.51468 10.5 7.49996 8.48528 7.49996 6Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75121 20.1053C3.82855 15.6156 7.49195 12 12 12C16.5081 12 20.1716 15.6157 20.2487 20.1056C20.2538 20.4034 20.0823 20.676 19.8116 20.8002C17.4327 21.8918 14.7865 22.5 12.0003 22.5C9.21382 22.5 6.5674 21.8917 4.18829 20.7999C3.91762 20.6757 3.74608 20.4031 3.75121 20.1053Z" fill="#0F172A"/>
</svg>

  }
}