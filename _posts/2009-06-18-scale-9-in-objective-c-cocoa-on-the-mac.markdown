---
layout: post
status: publish
published: true
title: Scale-9 in Objective-C Cocoa on the Mac
author: Jon Baker
author_login: jon
author_email: jon@gotripod.com
excerpt: ! "Having used flash extensively for the last few years I have really come
  to rely on using Scale-9 scaling on UI elements in the rich internet apps I design
  and develop. It is a great technique for things like rounded rectangles, button
  graphics etc and ensuring the rounded corners do not distort when stretched.\n\nI
  have recently been doing Cocoa Development on Mac OS X 10.5 and was looking for
  a way to do this in Cocoa and <a href=\"http://www.karlkraft.com/index.php/2007/11/14/nsdrawninepartimage/\">came
  across</a> a great drawing method named <a href=\"http://developer.apple.com/documentation/Cocoa/Reference/ApplicationKit/Miscellaneous/AppKit_Functions/Reference/reference.html\">NSDrawNinePartImage</a>.
  The method has the following signature:\n<pre lang=\"objc\">void NSDrawNinePartImage(NSRect
  frame,\n   NSImage *topLeftCorner,\n   NSImage *topEdgeFill,\n   NSImage *topRightCorner,\n
  \  NSImage *leftEdgeFill,\n   NSImage *centerFill,\n   NSImage *rightEdgeFill,\n
  \  NSImage *bottomLeftCorner,\n   NSImage *bottomEdgeFill,\n   NSImage *bottomRightCorner,\n
  \  NSCompositingOperation op,\n   CGFloat alphaFraction,\n   BOOL flipped\n);</pre>\n"
wordpress_id: 401
wordpress_url: http://clockobj.co.uk/?p=297
date: !binary |-
  MjAwOS0wNi0xOCAyMjo0OTozNSArMDIwMA==
date_gmt: !binary |-
  MjAwOS0wNi0xOCAyMjo0OTozNSArMDIwMA==
categories:
- Objective-C and Cocoa
tags:
- UI Design
- Cocoa
- Objective-C
- Scale9
comments:
- id: 261
  author: George Cook
  author_email: georgejcook@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0yNCAyMToxNjoyNSArMDIwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0yNCAyMToxNjoyNSArMDIwMA==
  content: Very nice! Thanks :)
- id: 262
  author: Kevin Cannon
  author_email: kevin@multiblah.com
  author_url: http://www.multiblah.com/
  date: !binary |-
    MjAxMC0wNC0xNSAxMTo1MTo1MyArMDIwMA==
  date_gmt: !binary |-
    MjAxMC0wNC0xNSAxMDo1MTo1MyArMDIwMA==
  content: ! 'Android handles this in a nice way. It allows you to ''mark up'' and
    image to indicate where it''s scaling happens and then save it as a .9.png file.

    http://developer.android.com/guide/developing/tools/draw9patch.html


    Perhaps it might be a nice addition to this.'
---
<p>Having used flash extensively for the last few years I have really come to rely on using Scale-9 scaling on UI elements in the rich internet apps I design and develop. It is a great technique for things like rounded rectangles, button graphics etc and ensuring the rounded corners do not distort when stretched.</p>
<p>I have recently been doing Cocoa Development on Mac OS X 10.5 and was looking for a way to do this in Cocoa and <a href="http://www.karlkraft.com/index.php/2007/11/14/nsdrawninepartimage/">came across</a> a great drawing method named <a href="http://developer.apple.com/documentation/Cocoa/Reference/ApplicationKit/Miscellaneous/AppKit_Functions/Reference/reference.html">NSDrawNinePartImage</a>. The method has the following signature:</p>
<pre lang="objc">void NSDrawNinePartImage(NSRect frame,
   NSImage *topLeftCorner,
   NSImage *topEdgeFill,
   NSImage *topRightCorner,
   NSImage *leftEdgeFill,
   NSImage *centerFill,
   NSImage *rightEdgeFill,
   NSImage *bottomLeftCorner,
   NSImage *bottomEdgeFill,
   NSImage *bottomRightCorner,
   NSCompositingOperation op,
   CGFloat alphaFraction,
   BOOL flipped
);</pre>
<p><a id="more"></a><a id="more-401"></a><br />
This method requires the developer to provide 9 separate images to create the 9 sections of the scale 9 image. Luckily the article I had stumbled across had a handy example for using a single class, so I thought that I would use their technique to create a simple generic class that can be used to draw a single NSImage as a Scale-9 scalable image. This could be used for example in an NSView or NSButtonCell.</p>
<pre lang="objc">//
//  GTDrawImage.m
//  StretchMyView
//
//  Created by Jon Baker on 17/06/2009.
//  Copyright 2009 Go Tripod Ltd. All rights reserved.
//

#import "GTDrawImage.h"

@implementation GTDrawImage

+(void) drawScalableImage:(NSImage *)sourceImage scaleTopLeft:(NSPoint)topLeftPoint scaleBottomRight:(NSPoint)bottomRightPoint inFrame:(NSRect)frame
{
	NSSize sourceSize = [sourceImage size];

	// Top left
	NSRect topLeftTileRect = NSMakeRect(0, 0, topLeftPoint.x, sourceSize.height - topLeftPoint.y);
	NSRect topLeftCutRect = NSMakeRect(0, topLeftPoint.y, topLeftTileRect.size.width, topLeftTileRect.size.height);

	// TopRight
	NSRect topRightTileRect = NSMakeRect(0,0, sourceSize.width - bottomRightPoint.x, topLeftTileRect.size.height);
	NSRect topRightCutRect = NSMakeRect(sourceSize.width - topRightTileRect.size.width, topLeftPoint.y, topRightTileRect.size.width, topRightTileRect.size.height);

	// Top
	NSRect topTileRect = NSMakeRect(0, 0, sourceSize.width - topLeftTileRect.size.width - topRightTileRect.size.width, topLeftTileRect.size.height);
	NSRect topCutRect = NSMakeRect(topLeftPoint.x, topLeftPoint.y, topTileRect.size.width, topTileRect.size.height);

	// Bottom Left
	NSRect bottomLeftTileRect = NSMakeRect(0, 0, topLeftCutRect.size.width, bottomRightPoint.y);
	NSRect bottomLeftCutRect = NSMakeRect(0, 0, bottomLeftTileRect.size.width, bottomLeftTileRect.size.height);

	// Bottom Right
	NSRect bottomRightTileRect = NSMakeRect(0,0, topRightCutRect.size.width, bottomLeftTileRect.size.height);
	NSRect bottomRightCutRect = NSMakeRect(topRightCutRect.origin.x, 0, bottomRightTileRect.size.width , bottomRightTileRect.size.height );

	// Bottom
	NSRect bottomTileRect = NSMakeRect(0,0, topTileRect.size.width, bottomLeftTileRect.size.height);
	NSRect bottomCutRect = NSMakeRect(topCutRect.origin.x, 0, bottomTileRect.size.width, bottomTileRect.size.height);

	// left

	NSRect leftTileRect = NSMakeRect(0, 0, bottomLeftTileRect.size.width, sourceSize.height - topTileRect.size.height - bottomTileRect.size.height);
	NSRect leftCutRect = NSMakeRect(0, bottomRightPoint.y, leftTileRect.size.width, leftTileRect.size.height);

	// right

	NSRect rightTileRect = NSMakeRect(0, 0, topRightCutRect.size.width, leftCutRect.size.height);
	NSRect rightCutRect = NSMakeRect(bottomRightPoint.x, bottomRightPoint.y, rightTileRect.size.width, rightTileRect.size.height);

	//center
	NSRect centerTileRect = NSMakeRect(0, 0, topTileRect.size.width, leftTileRect.size.height);
	NSRect centerCutRect = NSMakeRect(topCutRect.origin.x, bottomRightPoint.y, centerTileRect.size.width, centerTileRect.size.height);

	NSImage *topLeft = [[NSImage alloc] initWithSize:topLeftTileRect.size];
	[topLeft lockFocus];
	[sourceImage drawInRect:topLeftTileRect fromRect:topLeftCutRect operation:NSCompositeCopy fraction:1.0];
	[topLeft unlockFocus];

	NSImage *top = [[NSImage alloc] initWithSize:topTileRect.size];
	[top lockFocus];
	[sourceImage drawInRect:topTileRect fromRect:topCutRect operation:NSCompositeCopy fraction:1.0];
	[top unlockFocus];

	NSImage *topRight = [[NSImage alloc] initWithSize:topRightTileRect.size];
	[topRight lockFocus];
	[sourceImage drawInRect:topRightTileRect fromRect:topRightCutRect operation:NSCompositeCopy fraction:1.0];
	[topRight unlockFocus];

	//setup center section, left, right
	NSImage *left = [[NSImage alloc] initWithSize:leftTileRect.size];
	[left lockFocus];
	[sourceImage drawInRect:leftTileRect fromRect:leftCutRect operation:NSCompositeCopy fraction:1.0];
	[left unlockFocus];

	NSImage *center = [[NSImage alloc] initWithSize:centerTileRect.size];
	[center lockFocus];
	[sourceImage drawInRect:centerTileRect fromRect:centerCutRect operation:NSCompositeCopy fraction:1.0];
	[center unlockFocus];

	NSImage *right = [[NSImage alloc] initWithSize:rightTileRect.size];
	[right lockFocus];
	[sourceImage drawInRect:rightTileRect fromRect:rightCutRect operation:NSCompositeCopy fraction:1.0];
	[right unlockFocus];

	NSImage *bottomLeft = [[NSImage alloc] initWithSize:bottomLeftTileRect.size];
	[bottomLeft lockFocus];
	[sourceImage drawInRect:bottomLeftTileRect fromRect:bottomLeftCutRect operation:NSCompositeCopy fraction:1.0];
	[bottomLeft unlockFocus];

	NSImage *bottom = [[NSImage alloc] initWithSize:bottomTileRect.size];
	[bottom lockFocus];
	[sourceImage drawInRect:bottomTileRect fromRect:bottomCutRect operation:NSCompositeCopy fraction:1.0];
	[bottom unlockFocus];

	NSImage *bottomRight = [[NSImage alloc] initWithSize:bottomRightTileRect.size];
	[bottomRight lockFocus];
	[sourceImage drawInRect:bottomRightTileRect fromRect:bottomRightCutRect operation:NSCompositeCopy fraction:1.0];
	[bottomRight unlockFocus];

	NSDrawNinePartImage(
						frame,
						topLeft, top, topRight,
						left, center, right,
						bottomLeft, bottom, bottomRight,
						NSCompositeSourceOver, 1.0, NO);

	[topLeft release];
	[top release];
	[topRight release];
	[left release];
	[center release];
	[right release];
	[bottomLeft release];
	[bottom release];
	[bottomRight release];
}

@end</pre>
<p>To use this generic classes, you simply need to import it where required:</p>
<pre lang="objc">#import "GTDrawImage.h"</pre>
<p>...and then you can call from within, for example the drawRect:, selector using the following method:</p>
<pre lang="objc">- (void)drawRect:(NSRect)rect {
	[GTDrawImage drawScalableImage:baseImage scaleTopLeft:NSMakePoint(8, 16) scaleBottomRight:NSMakePoint(16,8) inFrame: [self bounds]];
}</pre>
<p>drawScalableImage takes an NSImage, in this case baseImage, and two reference points (NSPoint) to split the image into nine slices, firstly the scaleTopLeft: and secondly the scaleBottomRight:, both located from the bottom left corner. So for example to split a 24px x 24px image into 9 equal 8px by 8px segments (see below), the topLeftPoint would be x=8px, y=16px and the bottom x=16 and y=8.</p>
<p><img class="s3-img" src="http://clockobj.co.uk.s3.amazonaws.com/scale9.png" border="0" alt="scale9.png" /></p>
<p>Just download the following classes into your projects and away you go:</p>
<ul>
<li>Header: <a class="s3-link" href="http://clockobj.co.uk.s3.amazonaws.com/GTDrawImage.h">GTDrawImage.h</a></li>
<li>Implementation: <a class="s3-link" href="http://clockobj.co.uk.s3.amazonaws.com/GTDrawImage.m">GTDrawImage.m</a></li>
<li>Sample Project using GTDrawImage: <a class="s3-link" href="http://clockobj.co.uk.s3.amazonaws.com/StretchMyView.zip">StretchMyView.zip</a> (Adapted example I found. Unfortunately I can't remember where and so don't know who to credit)</li>
</ul>
