import React, { ReactNode } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";

import log from "../../utils/logger";

/* ----- Types ----- */
type PropsType = {
  width: number;
  height: number;
  color:
    | `rgb(${number}, ${number}, ${number})`
    | `rgba(${number}, ${number}, ${number}, ${number})`;
  borderRadius: number;
  children: ReactNode;
  border?: boolean;
  style?: ViewStyle;
};

/* ----------------- */

const InnerShadow = (props: PropsType) => {
  const {
    width,
    height,
    color,
    borderRadius,
    children,
    style,
    border = false,
  } = props;

  const rgbMatch = color.match(/\d+/g);
  if (!rgbMatch && rgbMatch.length !== 3 && rgbMatch.length !== 4) {
    log({ type: "e", message: "Invalid color type provided" });
    return <></>;
  }

  const [r, g, b] = rgbMatch.map((value) => parseInt(value, 10));

  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          height: height,
          backgroundColor: "#000",
          borderRadius: borderRadius,
          shadowColor: "black",
          alignSelf: "center",
          ...Platform.select({
            ios: {
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.8,
              shadowRadius: 10,
            },
            android: {
              elevation: 10,
            },
          }),
        },
      ]}
    >
      <View
        style={[
          styles.container,
          {
            width: width,
            height: height,
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
            borderRadius: borderRadius,
          },
          border && {
            borderColor: `rgba(${r}, ${g}, ${b}, 1)`,
            borderWidth: 1,
          },
        ]}
      >
        <View
          style={[
            styles.container,
            {
              width: width - 0.5,
              height: height - 0.5,
              backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
              borderRadius: borderRadius,
            },
          ]}
        >
          <View
            style={[
              styles.container,
              {
                width: width - 1,
                height: height - 1,
                backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
                borderRadius: borderRadius,
              },
            ]}
          >
            <View
              style={[
                styles.container,
                {
                  width: width - 2,
                  height: height - 2,
                  backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)`,
                  borderRadius: borderRadius,
                },
              ]}
            >
              <View
                style={[
                  styles.container,
                  {
                    width: width - 3,
                    height: height - 3,
                    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
                    borderRadius: borderRadius,
                  },
                ]}
              >
                <View
                  style={[
                    styles.container,
                    {
                      width: width - 4,
                      height: height - 4,
                      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
                      borderRadius: borderRadius,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.container,
                      {
                        width: width - 5,
                        height: height - 5,
                        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
                        borderRadius: borderRadius,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.container,
                        {
                          width: width - 6,
                          height: height - 6,
                          backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
                          borderRadius: borderRadius,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.container,
                          {
                            width: width - 7,
                            height: height - 7,
                            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
                            borderRadius: borderRadius,
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.container,
                            {
                              width: width - 8,
                              height: height - 8,
                              backgroundColor: `rgba(${r}, ${g}, ${b}, 0.4)`,
                              borderRadius: borderRadius,
                            },
                          ]}
                        >
                          <View
                            style={[
                              styles.container,
                              {
                                width: width - 9,
                                height: height - 9,
                                backgroundColor: `rgba(${r}, ${g}, ${b}, 0.4)`,
                                borderRadius: borderRadius,
                              },
                            ]}
                          >
                            <View
                              style={[
                                styles.container,
                                {
                                  width: width - 10,
                                  height: height - 10,
                                  backgroundColor: `rgba(${r}, ${g}, ${b}, 0.4)`,
                                  borderRadius: borderRadius,
                                },
                              ]}
                            >
                              <View
                                style={[
                                  styles.container,
                                  {
                                    width: width - 11,
                                    height: height - 11,
                                    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.4)`,
                                    borderRadius: borderRadius,
                                  },
                                ]}
                              >
                                <View
                                  style={[
                                    styles.container,
                                    {
                                      width: width - 12,
                                      height: height - 12,
                                      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.4)`,
                                      borderRadius: borderRadius,
                                    },
                                  ]}
                                >
                                  <View
                                    style={[
                                      styles.container,
                                      {
                                        width: width - 13,
                                        height: height - 13,
                                        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
                                        borderRadius: borderRadius,
                                      },
                                    ]}
                                  >
                                    <View
                                      style={[
                                        styles.container,
                                        {
                                          width: width - 14,
                                          height: height - 14,
                                          backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
                                          borderRadius: borderRadius,
                                        },
                                      ]}
                                    >
                                      <View
                                        style={[
                                          styles.container,
                                          {
                                            width: width - 15,
                                            height: height - 15,
                                            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.6)`,
                                            borderRadius: borderRadius,
                                          },
                                        ]}
                                      >
                                        <View
                                          style={[
                                            styles.container,
                                            {
                                              width: width - 16,
                                              height: height - 16,
                                              backgroundColor: `rgba(${r}, ${g}, ${b}, 0.6)`,
                                              borderRadius: borderRadius,
                                            },
                                            style,
                                          ]}
                                        >
                                          {children}
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    marginHorizontal: 2,
    padding: 0,
  },
});

export default InnerShadow;
