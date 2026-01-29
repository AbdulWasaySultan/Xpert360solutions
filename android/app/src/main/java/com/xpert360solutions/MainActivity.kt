package com.xpert360solutions

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.swmansion.rnscreens.fragment.restoration.RNScreensFragmentFactory
import org.devio.rn.splashscreen.SplashScreen  // Add this import


class MainActivity : ReactActivity() {

  override fun getMainComponentName(): String = "Xpert360Solutions"

  override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this) // Add this line BEFORE super.onCreate
    supportFragmentManager.fragmentFactory = RNScreensFragmentFactory()
    super.onCreate(savedInstanceState)
  }

  override fun createReactActivityDelegate(): ReactActivityDelegate =
    DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}

