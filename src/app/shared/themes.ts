const white: string = '#f8fbfd';
const performanceButtonStyle = {
  button1: {
    defaultTextColor: 'rgb(163, 218, 245)',
    activeTextColor: 'rgb(6, 168, 249)',
    parent1BackgroundGradient:
      'linear-gradient(45deg, rgb(8, 14, 29), rgb(10, 14, 18))', // DON'T TOUCH THIS
    activeParent1BackgroundGradient:
      'linear-gradient(45deg, rgba(6, 168, 249,0.7), rgb(42, 68, 81))',
    parent2BackgroundGradient:
      'linear-gradient(45deg, rgb(38, 89, 115), rgb(46, 105, 135), rgba(50, 119, 153), rgba(50, 119, 153), rgba(50, 119, 153))',
    parent3BoxShadow: '0px 0px 10px 3px rgba(6, 168, 249,0.7) inset',
    activeParent3BoxShadow: '0px 0px 10px 3px rgba(6, 168, 249,1) inset',
  },
  button2: {
    defaultTextColor: 'rgb(245, 164, 235)',
    activeTextColor: 'rgb(249, 6, 221)',
    parent1BackgroundGradient:
      'linear-gradient(45deg, rgb(8, 14, 29), rgb(10, 14, 18))', // DON'T TOUCH THIS
    activeParent1BackgroundGradient:
      'linear-gradient(45deg, rgba(249, 6, 221,0.7), rgb(78, 42, 81))',
    parent2BackgroundGradient:
      'linear-gradient(45deg, rgb(115, 38, 115), rgb(134, 45, 134), rgba(153, 51, 153), rgba(153, 51, 153), rgba(153, 51, 153))',
    parent3BoxShadow: '0px 0px 10px 3px rgba(249, 6, 221,0.7) inset',
    activeParent3BoxShadow: '0px 0px 10px 3px rgba(249, 6, 221,1) inset',
  },
  button3: {
    defaultTextColor: 'rgb(211, 164, 245)',
    activeTextColor: 'rgb(148, 5, 250)',
    parent1BackgroundGradient:
      'linear-gradient(45deg, rgb(8, 14, 29), rgb(10, 14, 18))', // DON'T TOUCH THIS
    activeParent1BackgroundGradient:
      'linear-gradient(45deg, rgba(148, 5, 250,0.7), rgb(65, 42, 82))',
    parent2BackgroundGradient:
      'linear-gradient(45deg, rgb(115, 38, 115), rgb(98, 46, 135), rgba(110, 50, 153), rgba(110, 50, 153), rgba(110, 50, 153))',
    parent3BoxShadow: '0px 0px 10px 3px rgba(148, 5, 250,0.7) inset',
    activeParent3BoxShadow: '0px 0px 10px 3px rgba(148, 5, 250,1) inset',
  },
  button4: {
    defaultTextColor: 'rgb(245, 198, 164)',
    activeTextColor: 'rgb(250, 107, 5)',
    parent1BackgroundGradient:
      'linear-gradient(45deg, rgb(8, 14, 29), rgb(10, 14, 18))', // DON'T TOUCH THIS
    activeParent1BackgroundGradient:
      'linear-gradient(45deg, rgba(250, 107, 5,0.7), rgb(82, 58, 42))',
    parent2BackgroundGradient:
      'linear-gradient(45deg, rgb(115, 70, 38), rgb(135, 83, 46), rgba(153, 93, 50), rgba(153, 93, 50), rgba(153, 93, 50))',
    parent3BoxShadow: '0px 0px 10px 3px rgba(250, 107, 5,0.7) inset',
    activeParent3BoxShadow: '0px 0px 10px 3px rgba(250, 107, 5,1) inset',
  },
};

export const themes = [
  {
    themeId: 1,
    background: `linear-gradient(
    -45deg,
    #030303,
    #050505,
    #070707,
    #090909,
    #101010,
    #181818,
    #1f1f1f,
    #222222,
    #252525,
    #272727,
    #2f2f2f,
    #333333,
    #353535,
    #373737,
    #57565e,
    #7d7c86,
    #9b9aa2,
    #b8b6bf,
    #c8c7cd,
    #d6d5da
  )`,
    headerBg: `linear-gradient(
    45deg,
    #0f050a,
    #0f050a,
    #06050a,
    #060606,
    #03070a,
    #020608,
    #020608,
    #030609,
    #06050a
  )`,
    header: {
      fontLogo: {
        'font-family': '"Nova Square", sans-serif',
        'font-size': '18px',
        'font-weight': 'bold',
        color: '#15181e',
        margin: '2px 2px 2px 1px',
        padding: '0 1px',
        border: '1px solid #15181e',
        'border-top-right-radius': '6px',
        'border-bottom-right-radius': '6px',
        'border-bottom-left-radius': '2px',
        'border-top-left-radius': '2px',
      },
      logo: {
        'font-family': '"Nova Square", sans-serif',
        color: '#15181e',
        'font-size': '18px',
        'font-weight': 'bold',
        margin: '2px 1px 2px 2px',
        padding: '0 1px',
        border: '1px solid #15181e',
        'border-top-left-radius': '6px',
        'border-bottom-left-radius': '6px',
        'border-bottom-right-radius': '2px',
        'border-top-right-radius': '2px',
      },
      ownerName: {
        'font-family': '"Nova Square", sans-serif',
        color: white,
        'font-size': '18px',
      },
      ownerLastname: {
        'font-family': '"Nova Square", sans-serif',
        color: white,
        'font-size': '18px',
        'font-weight': 'bold',
      },
      logoLine: {
        count: 8,
        style: {
          width: '12px',
          height: '3px',
          'background-color': white,
        },
      },
    },
    body: {
      left: {
        line: {
          width: '100%',
          height: '2.5px',
          'background-color': white,
        },
        text: {
          color: white,
          'font-size': '8px',
        },

        performanceButtons: [
          {
            id: 1,
            label: 'HOT CUE',
            description: 'SAMPLER',
            parent1: {
              background:
                performanceButtonStyle.button1.parent1BackgroundGradient,
              padding: '3px 3px 2px 3px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            activeParent1: {
              background:
                performanceButtonStyle.button1.activeParent1BackgroundGradient,
              padding: '2px 2px 1px 2px',
              margin: '1px 1px 1px 1px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            parent2: {
              background:
                performanceButtonStyle.button1.parent2BackgroundGradient,
              padding: '3px',
              'border-radius': '6px',
            },
            parent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow': performanceButtonStyle.button1.parent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },
            activeParent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow':
                performanceButtonStyle.button1.activeParent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },

            defaultText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button1.defaultTextColor,
              'white-space': 'nowrap',
            },

            activeText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button1.activeTextColor,
              'white-space': 'nowrap',
            },
            descriptionStyle: {
              display: 'grid',
              'place-items': 'center',
              'font-size': '8px',
              color: white,
              'font-weight': '400',
              border: `2px solid ${white}`,
              margin: '0 4px',
              'white-space': 'nowrap',
            },
          },
          {
            id: 2,
            label: 'AUTO LOOP',
            description: 'BOUNCE LOOP',
            parent1: {
              background:
                performanceButtonStyle.button2.parent1BackgroundGradient,
              padding: '3px 3px 2px 3px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            activeParent1: {
              background:
                performanceButtonStyle.button2.activeParent1BackgroundGradient,
              padding: '2px 2px 1px 2px',
              margin: '1px 1px 1px 1px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            parent2: {
              background:
                performanceButtonStyle.button2.parent2BackgroundGradient,
              padding: '3px',
              'border-radius': '6px',
            },
            parent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow': performanceButtonStyle.button2.parent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },
            activeParent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow':
                performanceButtonStyle.button2.activeParent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },

            defaultText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button2.defaultTextColor,
              'white-space': 'nowrap',
            },

            activeText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button2.activeTextColor,
              'white-space': 'nowrap',
            },
            descriptionStyle: {
              display: 'grid',
              'place-items': 'center',
              'font-size': '8px',
              color: white,
              'font-weight': '400',
              border: `2px solid ${white}`,
              margin: '0 4px',
              'white-space': 'nowrap',
            },
          },
          {
            id: 3,
            label: 'TOUCH FX',
            description: 'JOG FX',
            parent1: {
              background:
                performanceButtonStyle.button3.parent1BackgroundGradient,
              padding: '3px 3px 2px 3px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            activeParent1: {
              background:
                performanceButtonStyle.button3.activeParent1BackgroundGradient,
              padding: '2px 2px 1px 2px',
              margin: '1px 1px 1px 1px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            parent2: {
              background:
                performanceButtonStyle.button3.parent2BackgroundGradient,
              padding: '3px',
              'border-radius': '6px',
            },
            parent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow': performanceButtonStyle.button3.parent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },
            activeParent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow':
                performanceButtonStyle.button3.activeParent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },

            defaultText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button3.defaultTextColor,
              'white-space': 'nowrap',
            },

            activeText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button3.activeTextColor,
              'white-space': 'nowrap',
            },
            descriptionStyle: {
              display: 'grid',
              'place-items': 'center',
              'font-size': '8px',
              color: white,
              'font-weight': '400',
              border: `2px solid ${white}`,
              margin: '0 4px',
              'white-space': 'nowrap',
            },
          },
          {
            id: 4,
            label: 'SLICER',
            description: 'SLICE LOOP',
            parent1: {
              background:
                performanceButtonStyle.button4.parent1BackgroundGradient,
              padding: '3px 3px 2px 3px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            activeParent1: {
              background:
                performanceButtonStyle.button4.activeParent1BackgroundGradient,
              padding: '2px 2px 1px 2px',
              margin: '1px 1px 1px 1px',
              'border-radius': '10px',
              'border-bottom': '1.3px solid rgba(255,255,255,0.7)',
            },
            parent2: {
              background:
                performanceButtonStyle.button4.parent2BackgroundGradient,
              padding: '3px',
              'border-radius': '6px',
            },
            parent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow': performanceButtonStyle.button4.parent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },
            activeParent3: {
              display: 'flex',
              align: 'items-center',
              background: white,
              'box-shadow':
                performanceButtonStyle.button4.activeParent3BoxShadow,
              padding: '5px',
              'border-radius': '4px',
            },

            defaultText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button4.defaultTextColor,
              'white-space': 'nowrap',
            },

            activeText: {
              'font-size': '8px',
              'font-weight': '600',
              padding: '3px 12px 3px 12px',
              background:
                'linear-gradient(45deg, rgba(31,33,52,0.95), rgba(24,37,55,0.95))',
              color: performanceButtonStyle.button4.activeTextColor,
              'white-space': 'nowrap',
            },
            descriptionStyle: {
              display: 'grid',
              'place-items': 'center',
              'font-size': '8px',
              color: white,
              'font-weight': '400',
              border: `2px solid ${white}`,
              margin: '0 4px',
              'white-space': 'nowrap',
            },
          },
        ],
      },
    },
  },
];
