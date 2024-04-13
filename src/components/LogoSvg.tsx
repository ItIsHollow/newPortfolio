import React from "react";
import { theme } from "./styles/Theme";

type LogoSvgPropsType = {
  width?: string;
  height?: string;
  viewBox?: string;
  color?: string;
};

export const LogoSvg = (props: LogoSvgPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 200 200"
      version="1.1"
    >
      <g id="surface1">
        <path
          stroke="none"
          fillRule="evenodd"
          fill={props.color || theme.color.font}
          fillOpacity={1}
          d="M 80.066406 161.820312 C 80.640625 162.632812 81.730469 163.949219 79.910156 163.128906 C 76.273438 161.5 73.648438 155.539062 71.253906 152.1875 C 70.828125 151.589844 69.636719 150.117188 69.429688 149.460938 C 71.960938 150.546875 72.628906 151.894531 74.28125 154.226562 C 76.144531 156.855469 77.757812 158.792969 79.660156 161.289062 Z M 66.042969 143.691406 C 62.023438 141.441406 56.308594 139.285156 54.164062 134.757812 C 52.269531 130.449219 52.074219 124.125 51.75 119.378906 C 52.085938 119.648438 53.488281 122.625 53.992188 123.433594 C 55.300781 125.515625 56.710938 127.457031 57.992188 129.582031 C 59.488281 132.117188 61.539062 135.164062 63.195312 137.640625 C 64.664062 139.839844 66.519531 142.242188 67.710938 144.582031 C 67.257812 144.546875 66.476562 143.941406 66.042969 143.691406 Z M 62.394531 100.242188 C 62.398438 99.453125 62.675781 96.039062 63.042969 95.953125 C 63.421875 100.847656 63.050781 100.613281 64.257812 105.3125 C 65.519531 110.230469 63.425781 105.359375 62.976562 103.765625 C 62.628906 102.527344 62.4375 101.539062 62.394531 100.242188 Z M 76.601562 97.394531 C 77.90625 98.988281 78.78125 100.082031 80.222656 101.566406 C 82.902344 104.363281 85.332031 107.003906 88.105469 109.746094 C 89.667969 111.292969 102.0625 123.640625 101.742188 125.046875 C 101.707031 125.203125 96.730469 122.964844 96.378906 122.839844 C 90.15625 120.589844 87.976562 121.535156 84.613281 114.410156 C 82.351562 109.613281 77.164062 102.324219 76.601562 97.394531 Z M 59.546875 100.257812 C 57.476562 97.339844 56.210938 94.0625 53.96875 91.050781 C 52.519531 89.113281 52.039062 88.644531 52.410156 86.292969 C 52.554688 85.394531 53.527344 85.957031 54.230469 86.1875 C 56.449219 86.914062 57.761719 86.929688 59.832031 87.425781 C 62.226562 88.003906 61.03125 90.410156 60.808594 92.472656 C 60.5625 94.769531 60.171875 96.726562 59.882812 98.953125 C 59.8125 99.492188 59.839844 99.890625 59.722656 100.371094 Z M 78.121094 89.097656 C 77.855469 88.222656 77.539062 85.402344 77.699219 85.949219 C 78.492188 88.636719 82.945312 93.992188 85.890625 94.011719 C 86.691406 94.015625 84.859375 92.992188 84.429688 92.5625 C 83.25 91.375 78.710938 85.132812 80.851562 83.757812 C 83.808594 81.851562 85.289062 82.863281 87.589844 85.375 C 89.277344 87.21875 90.789062 90.394531 89.203125 92.78125 C 86.742188 96.492188 79.730469 93.542969 78.238281 89.410156 Z M 50.359375 86.15625 C 50.285156 86.128906 45.15625 81.933594 50.035156 84.632812 C 50.988281 85.164062 50.667969 86.167969 50.359375 86.15625 Z M 70.5625 64.253906 C 71.226562 59.265625 75.492188 52.875 80.882812 54.09375 C 88.964844 55.917969 84.105469 72.949219 74.882812 72.003906 C 71.945312 71.703125 70.601562 68.738281 70.535156 65.878906 C 70.519531 65.308594 70.539062 64.824219 70.5625 64.253906 Z M 64.6875 61.074219 C 65.300781 61.292969 66.875 61.816406 67.5625 61.875 C 67.105469 63.953125 67.121094 63.96875 67.121094 66.074219 C 67.121094 68.777344 68.34375 71.738281 69.621094 73.101562 C 75.5625 78.984375 83.015625 73.808594 86.355469 67.609375 C 86.660156 67.046875 87.996094 67.726562 88.609375 67.882812 C 89.617188 68.144531 90.726562 68.273438 91.757812 68.410156 C 89.964844 72.222656 85.089844 76.070312 81.816406 78.355469 C 70.632812 86.167969 53.597656 84.363281 43.460938 75.488281 C 34.859375 67.953125 30 55.664062 32.378906 43.886719 C 32.949219 41.070312 34.710938 37.355469 36.289062 35.003906 C 38.25 38.039062 39.46875 40.738281 41.898438 43.632812 C 45.613281 48.0625 48 50.960938 52.730469 54.390625 C 56.789062 57.332031 59.914062 59.328125 64.6875 61.074219 Z M 55.261719 19.789062 C 61.960938 17.5 70.144531 18.609375 76.125 20.722656 C 86.019531 24.347656 94.039062 33.09375 96.550781 43.972656 C 97.71875 49.015625 97.226562 56.605469 95.433594 61.488281 C 95.023438 62.613281 94.046875 62.613281 92.875 62.816406 C 91.3125 63.085938 89.421875 62.753906 88.019531 61.957031 C 87.746094 58.648438 88.304688 56.757812 86.214844 53.683594 C 83.40625 49.5625 78.269531 49.472656 74.382812 52.015625 C 71.671875 53.789062 70.753906 55.078125 69.097656 57.671875 C 68.660156 57.613281 68.285156 57.417969 67.890625 57.210938 C 67.496094 57.003906 67.058594 56.835938 66.679688 56.628906 L 64.410156 55.304688 C 57.875 51.410156 51.171875 45.25 46.132812 39.457031 C 44.28125 37.328125 41.183594 33.320312 40.136719 30.710938 C 39.792969 29.863281 39.972656 29.546875 40.578125 28.785156 C 42.484375 26.402344 47.917969 22.835938 50.421875 21.675781 C 52.011719 20.945312 53.617188 20.359375 55.261719 19.789062 Z M 49.933594 107.976562 C 49.523438 107.109375 49.15625 106.324219 48.761719 105.492188 C 46.984375 101.746094 44.992188 98.714844 43.0625 95.125 C 41.867188 92.90625 42.671875 90.425781 41.222656 88.070312 C 39.964844 86.03125 42.738281 96.53125 39.792969 87.546875 C 38.449219 83.453125 38.375 81.804688 43.027344 83.773438 C 46.8125 85.375 49.316406 88.457031 51.296875 92.085938 C 52.40625 94.113281 53.894531 96.363281 55.097656 98.421875 C 55.378906 98.902344 55.660156 99.371094 55.953125 99.847656 C 59.527344 105.578125 63.46875 110.582031 67.460938 115.953125 C 69.53125 118.738281 71.261719 121.332031 73.464844 124.101562 C 75.765625 126.988281 77.949219 129.648438 80.316406 132.476562 C 83.894531 136.753906 82.636719 137.003906 79.421875 139.832031 C 76.96875 141.988281 81.328125 139.859375 81.992188 139.425781 C 85.15625 137.203125 85.441406 136.734375 89.332031 138.761719 C 93.644531 141.007812 101.660156 146.753906 105.765625 141.300781 C 107.726562 138.699219 103.882812 140.933594 102.960938 141.011719 C 100.023438 141.257812 91.992188 136.222656 89.414062 134.34375 C 85.046875 131.171875 72.988281 120.988281 71.660156 115.828125 C 70.882812 112.8125 70.410156 108.589844 69.914062 105.410156 C 69.585938 103.324219 69.285156 101.304688 69.101562 99.195312 C 69.03125 97.5 68.703125 95.535156 68.574219 93.910156 C 68.53125 93.359375 68.894531 92.894531 69.09375 92.539062 C 69.527344 91.773438 70.027344 90.945312 70.609375 90.296875 C 71.191406 89.671875 71.9375 88.890625 72.726562 88.59375 C 74.023438 91.867188 73.230469 95.277344 74.078125 98.566406 L 74.320312 99.492188 C 74.492188 100.105469 74.511719 100.859375 74.105469 101.46875 C 73.792969 101.925781 71.449219 102.867188 70.75 103.042969 C 70.863281 103.496094 71.167969 103.511719 71.625 103.632812 C 72.75 103.929688 74.460938 103.558594 75.480469 103.042969 C 76.890625 105.8125 78.457031 108.15625 79.867188 111.019531 C 81.148438 113.613281 84.238281 120.488281 86.140625 122.222656 C 89.503906 125.292969 96.949219 127.871094 101.179688 130.40625 C 102.113281 130.964844 107.335938 134.351562 107.429688 135.28125 C 107.40625 135.289062 100.902344 134.34375 101.4375 135.386719 C 101.628906 135.761719 107.421875 137.367188 108.308594 139.128906 C 110.105469 142.703125 105.667969 146.179688 103.226562 147.820312 C 102.578125 148.257812 102.125 148.5 101.421875 148.8125 C 99.601562 149.511719 102.515625 149.675781 103.96875 149.195312 C 107.074219 148.171875 109.550781 145.71875 111.871094 143.394531 C 113.863281 143.964844 120.734375 148.511719 121.605469 150.011719 C 122.246094 151.109375 121.980469 151.085938 120.84375 151.355469 C 118.695312 151.863281 114.636719 151.105469 114.109375 151.242188 C 113.972656 152.285156 126.058594 155.65625 123.707031 149.398438 C 122.675781 146.660156 121.113281 146.859375 119.109375 145.105469 C 116.308594 142.648438 115.847656 142.503906 113.949219 138.953125 C 111.898438 135.042969 110.617188 131.582031 107.847656 128.085938 C 104.511719 123.875 101.988281 120.066406 98.316406 116 C 95.398438 112.765625 92.90625 110.070312 89.722656 107.101562 C 86.671875 104.253906 83.933594 100.96875 80.921875 98.03125 C 78.5 95.703125 75.632812 90.175781 75.425781 86.703125 C 75.402344 86.285156 75.355469 85.976562 75.882812 85.820312 C 76.625 85.59375 76.464844 87.195312 76.597656 87.980469 C 77.222656 91.59375 79.921875 94.230469 82.890625 95.851562 C 88.554688 98.941406 94.792969 92.757812 90.992188 86.238281 C 89.777344 84.152344 88.546875 83.421875 87.449219 81.839844 C 88.339844 81.285156 95.382812 87.027344 96.320312 88.035156 C 99.242188 91.191406 102.257812 94.847656 105.128906 98.164062 C 112.25 106.390625 115.070312 109.660156 124.585938 114.96875 C 130.246094 118.125 135.972656 121.183594 141.621094 124.335938 C 145.566406 126.535156 154.644531 132.675781 157.691406 135.886719 C 161.273438 139.660156 161.582031 141.480469 164.089844 145.628906 C 164.511719 146.328125 164.949219 147.136719 165.660156 147.539062 C 166 145.261719 164.117188 141.753906 165.582031 143.570312 C 168.4375 147.105469 172.765625 147.492188 176.648438 148.910156 C 176.972656 149.03125 183.40625 151.074219 182.695312 149.996094 C 182.515625 149.722656 169.285156 143.21875 167.347656 141.679688 C 165.65625 140.332031 165.066406 139.355469 163.074219 138.066406 C 161.613281 136.890625 160.359375 134.585938 158.816406 133.015625 C 149.0625 123.074219 133.566406 116.539062 121.761719 109.585938 C 117.640625 107.140625 114.96875 104.5625 111.660156 101.011719 C 109.117188 98.257812 106.550781 95.261719 104.023438 92.445312 C 102.355469 90.589844 100.730469 88.351562 99.078125 86.527344 C 97.589844 84.886719 92.835938 80.859375 90.761719 79.878906 C 88.1875 78.664062 88.410156 79.160156 90.351562 77.105469 C 95.878906 71.25 98.898438 66.050781 100.433594 57.75 C 102.574219 46.191406 99.21875 34.53125 91.671875 25.953125 C 87.726562 21.46875 82.933594 18.253906 77.558594 16.015625 C 64.625 10.628906 47.847656 14.476562 38.101562 24.949219 C 28.335938 35.441406 24.878906 50.679688 30.421875 64.523438 C 32.683594 70.179688 36.617188 75.832031 41.441406 79.367188 C 44.65625 81.722656 33.8125 76.984375 37.015625 87.179688 C 38.597656 92.21875 40.886719 96.539062 43.460938 101.046875 C 44.609375 103.0625 48.238281 110.0625 48.230469 111.949219 C 48.226562 113.90625 48.679688 116.667969 48.8125 118.734375 C 49.089844 123.015625 49.535156 131.925781 51.125 135.550781 C 54.046875 142.199219 60.203125 143.847656 65.707031 147.320312 C 68.589844 149.140625 73.515625 160.503906 76.871094 163.960938 C 81.25 168.46875 96.0625 171.378906 102.238281 171.496094 C 104.652344 171.539062 107.039062 172.152344 109.667969 172.246094 C 117.441406 172.515625 124.710938 172.082031 132.527344 172.714844 C 143.101562 173.570312 153.480469 175.300781 164.164062 176.089844 C 169.148438 176.457031 174.742188 176.613281 179.625 177.183594 C 181.050781 177.351562 182.195312 177.613281 183.578125 178.003906 C 187.273438 179.09375 183.289062 177.085938 182.253906 176.710938 C 177.90625 175.082031 178.871094 175.503906 174.226562 175.203125 C 168.972656 174.863281 162.449219 173.753906 157.164062 172.910156 C 145.519531 171.046875 134.550781 168.753906 122.703125 168.753906 C 121.011719 168.757812 119.34375 168.75 117.652344 168.703125 C 115.566406 168.628906 113.125 168.308594 110.960938 168.152344 C 107.515625 167.902344 103.011719 167.203125 99.539062 166.667969 C 93.890625 165.792969 87.085938 164.792969 83.25 159.847656 C 81.539062 157.644531 79.890625 154.96875 78.195312 152.628906 C 76.683594 150.550781 75.476562 148.761719 74.109375 146.578125 C 72.65625 144.253906 68.753906 140.175781 66.828125 137.894531 C 62.9375 133.183594 59.3125 126.558594 56.105469 121.183594 C 53.734375 117.210938 51.90625 112.25 49.933594 107.976562 Z M 61.40625 23.859375 C 65.621094 23.859375 67.644531 24.050781 71.730469 24.917969 C 72.539062 25.089844 73.402344 25.257812 74.378906 25.257812 L 74.378906 24.90625 C 74.050781 24.816406 73.878906 24.578125 73.5625 24.375 C 73.222656 24.148438 73.015625 24.007812 72.660156 23.816406 C 70.113281 22.449219 67.035156 21.5625 64.109375 21.105469 C 63.242188 20.972656 62.265625 20.972656 61.484375 20.859375 C 59.121094 20.511719 54.402344 21.871094 52.261719 22.789062 C 49.179688 24.132812 45.0625 26.1875 43 28.976562 C 41.878906 30.496094 42.382812 31.191406 44.140625 30.011719 C 49.09375 26.683594 55.484375 23.972656 61.40625 23.859375 Z M 64.765625 79.660156 C 64.324219 79.050781 60.832031 78.316406 60.082031 78.074219 C 51.804688 75.421875 45.003906 70.15625 39.449219 63.183594 C 39.316406 63.015625 36.808594 59.253906 37.964844 61.808594 C 41.332031 69.269531 49.785156 75.953125 56.832031 78.828125 C 57.632812 79.15625 65.265625 81.914062 64.765625 79.660156 Z M 81.277344 57.425781 C 74.105469 53.269531 69.449219 66.453125 75.40625 70.160156 C 77.011719 71.15625 79.5625 70.640625 77.855469 70.226562 C 70.640625 68.476562 74.25 55.566406 80.308594 58.34375 C 81.308594 58.804688 82.625 60.699219 82.953125 59.976562 C 83.347656 59.113281 81.800781 57.820312 81.277344 57.425781 Z M 91.378906 103.957031 C 90.460938 105.703125 91.773438 106.414062 93.726562 104.367188 C 96.011719 101.96875 101.957031 93.742188 94.460938 100.878906 C 93.613281 101.6875 92.085938 102.984375 91.378906 103.957031 Z M 95.316406 108.914062 C 96.410156 109.089844 97.675781 107.46875 98.554688 106.695312 C 99.332031 106.007812 103.039062 101.574219 99.652344 104.039062 C 98.734375 104.707031 95 106.984375 94.949219 108.164062 C 94.933594 108.539062 94.992188 108.792969 95.316406 108.914062 Z M 96.085938 104.203125 C 96.175781 106.683594 101.109375 100.265625 100.425781 100.25 C 99.519531 100.222656 96.382812 102.710938 96.117188 103.996094 Z M 87.5625 91.515625 C 87.390625 91.664062 85.519531 92.820312 86.949219 92.667969 C 88.761719 92.46875 89.769531 89.066406 88.007812 91.0625 C 87.859375 91.230469 87.726562 91.363281 87.5625 91.515625 Z M 87.5625 91.515625 "
        />
      </g>
    </svg>
  );
};